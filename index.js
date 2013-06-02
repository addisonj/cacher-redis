// we use redback as it has some higher level functionality!
var redback = require("redback")


function CacherRedis(host, port, opts) {
  if (host instanceof redback.Client) {
    this.client = redback.use(host)
  }
  opts = opts || {}

  this.client = this.client || new redback.createClient(host, port, opts)

  opts.namespace = opts.namespace || "cacher"
  this.cache = this.client.createCache(opts.namespace)
}

CacherRedis.prototype.get = function(key, cb) {
  this.cache.get(key, function(err, obj) {
    if (err) return cb(err)

    try {
      obj = JSON.parse(obj)
    } catch (e) {
    } finally {
      cb(null, obj)
    }
  })
}

CacherRedis.prototype.set = function(key, cacheObject, ttl, cb) {
  cb = cb || function() {}
  if (typeof cacheObject == 'object') cacheObject = JSON.stringify(cacheObject)
  this.cache.set(key, cacheObject, ttl, cb)
}

CacherRedis.prototype.invalidate = function(key, cb) {
  cb = cb || function() {}
  this.cache.flush(key, cb)
}

module.exports = CacherRedis
