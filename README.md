# CacherRedis
This is a pluggable backend for Cacher (https://github.com/addisonj/node-cacher)

## What is it?
A small adapter to use node-redis

## Options
CacherRedis takes the same parameters as node-redis (https://github.com/mranney/node_redis)
```JavaScript
var CacherRedis = require('cacher-redis')
var cacheBackend = new CacherRedis(host, port, opts)
```

Additionally, it can take an existing redis connection and resuse it:
```JavaScript
var redisClient = require('redis').createClient()
var CacherRedis = require('cacher-redis')
var Cacher = requrie('cacher')
var cacher = new Cacher(new CacherRedis(redisClient))
```

