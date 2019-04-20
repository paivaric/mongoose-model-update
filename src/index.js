const _ = require('lodash')

module.exports = function (schema, defaults) {
  schema.methods.update = function (source, permitted, cb) {
    if (!cb) {
      cb = permitted
      permitted = defaults
    }
    Object.assign(this, permitted ? _.pick(source, permitted) : source)
    return this.save(cb)
  }
  schema.statics.getPermitted = function (permitted = defaults) {
    return permitted
  }
}
