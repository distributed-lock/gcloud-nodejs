const LockExistsError = require('./errors/lockExists')

async function insertLock (datastore, key, options) {
  try {
    await datastore.insert({
      key: key,
      data: {
        expiresAt: new Date(Date.now() + options.ttl)
      }
    })

    return
  } catch (err) {
    if (err.message.includes('ALREADY_EXISTS')) {
      const lock = await datastore.get(key)
      throw new LockExistsError(lock)
    }

    throw err
  }
}

module.exports = insertLock
