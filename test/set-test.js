'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')
var LruCache = require('../lighter-lru-cache')

describe('LruCache.prototype.set', function () {
  it('sets a cached item', function () {
    var cache = new LruCache()
    cache.set('a', 1)
    var a = cache.get('a')
    is(a, 1)
  })
})
