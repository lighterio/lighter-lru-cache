'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.remove', function () {
  it('deletes a cached item', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    cache.del('a')
    var a = cache.get('a')
    is(a, undefined)
    is(cache.size, 0)
  })

  it('is aliased as "del"', function () {
    var cache = new LruCache()
    is(cache.del, cache.remove)
  })
})
