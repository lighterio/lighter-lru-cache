'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.size', function () {
  it('starts at zero', function () {
    var cache = new LruCache()
    is(cache.size, 0)
  })

  it('increments for new items', function () {
    var cache = new LruCache()
    cache.set('a', 0)
    is(cache.size, 1)
    cache.set('a', 0)
    is(cache.size, 1)
    cache.set('b', 0)
    is(cache.size, 2)
  })
})
