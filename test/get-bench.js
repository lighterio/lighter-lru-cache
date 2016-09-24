'use strict'
/* global bench it */
var packages = require('./.bench-packages')

bench('Setting 10 items and getting 10 times', function () {
  packages.forEach(function (name, Cache) {
    it(name, function () {
      var cache = new Cache()
      var n = 0
      cache.set('v0', 0)
      cache.set('v1', 1)
      cache.set('v2', 2)
      cache.set('v3', 3)
      cache.set('v4', 4)
      cache.set('v5', 5)
      cache.set('v6', 6)
      cache.set('v7', 7)
      cache.set('v8', 8)
      cache.set('v9', 9)
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      n += cache.get('v0')
      n += cache.get('v1')
      n += cache.get('v2')
      n += cache.get('v3')
      n += cache.get('v4')
      n += cache.get('v5')
      n += cache.get('v6')
      n += cache.get('v7')
      n += cache.get('v8')
      n += cache.get('v9')
      is(n, 450)
    })
  })
})