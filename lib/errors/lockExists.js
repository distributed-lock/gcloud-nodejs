/**
 * Error thrown when an existing unexpired lock is found
 */
module.exports = class LockExistsError extends Error {
  constructor (lock) {
    super()
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LockExistsError)
    }
    this.lock = lock
    this.message = `Found existing lock w/ expiresAt: ${lock.expiresAt}`
  }
}
