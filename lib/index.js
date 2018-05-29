const Datastore = require('@google-cloud/datastore')
const LockExistsError = require('./errors/lockExists')

class DistributedLock {
  // Datastore client options
  constructor (options) {
    this.datastore = new Datastore(options)
  }

  /**
   * Acquires lock for provided key
   * @param {object} [options]
   * @param {Date} [options.ttl] duration, in milliseconds, lock will be held; defaults to 30000 (30 seconds)
   *
   * @throws {LockExistsError} thrown if existing unexpired lock exists
   */
  async lock (key, options = { ttl: 30000 }) {
    const primaryLockKey = this.datastore.key(['github.com/distributedlock/primaryKey', key])
    try {
      await this.datastore.insert({
        key: primaryLockKey,
        data: {
          expiresAt: new Date(Date.now() + options.ttl)
        }
      })

      // primaryLock acquired.
      return
    } catch (err) {
      if (!err.message.includes('ALREADY_EXISTS')) {
        // unexpected error
        throw err
      }
    }

    // MUST occur in transaction to ensure we delete what we got
    const transaction = this.datastore.transaction()
    await transaction.run()

    // primaryLock exists... check if expired
    const primaryLock = await transaction.get(primaryLockKey)
    if (primaryLock.expiresAt >= Date.now()) {
      // existing primaryLock isn't expired
      throw LockExistsError(primaryLock)
    }

    // delete expired primaryLock
    await transaction.delete(primaryLockKey)

    await transaction.commit()
  }
}

module.exports = DistributedLock
