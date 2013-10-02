# CacherRedis
This is a pluggable backend for Cacher (https://github.com/addisonj/node-cacher)

## What is it?
A small adapter that uses redis as a backend

## Options
CacherRedis takes the same parameters as node-redis.createClient (https://github.com/mranney/node_redis)
```JavaScript
var CacherRedis = require('cacher-redis')
var cacheBackend = new CacherRedis(port, host, opts)
```

Additionally, it can take an existing redis connection and resuse it:
```JavaScript
var redisClient = require('redis').createClient()
var CacherRedis = require('cacher-redis')
var Cacher = requrie('cacher')
var cacher = new Cacher(new CacherRedis(redisClient))
```

Keys are also namespaced, ``opts.namespace`` defines the namespace, the deafult namespace is "cacher"

