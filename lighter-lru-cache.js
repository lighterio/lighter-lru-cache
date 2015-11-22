'use strict'
var Type = require('lighter-type')

/**
 * Fast LRU Cache, implemented with a doubly-linked loop.
 */
var LruCache = module.exports = Type.extend({

  /**
   * Create a Cache object based on options.
   */
  init: function (options) {
    if (options) {
      this.max = options.max || Infinity
    } else {
      options = new this.Options()
      this.max = options.max
    }
    this.length = options.length
    this.reset()
  },

  /**
   * Clear the cache.
   */
  reset: function () {
    this.size = 0
    this.map = {}
    this.next = this
    this.prev = this
  },

  /**
   * Set the value of an item, creating it if it doesn't exist.
   */
  set: function (key, value) {
    var item = this.map[key]
    if (item) {
      item.value = value
      if (item !== this.next) {
        item.relink(this)
      }
    } else {
      // Create an item and add it to the head of the loop.
      item = this.map[key] = new this.Item(key, value)
      item.link(this)

      // Remove the tail if necessary.
      if (this.size < this.max) {
        this.size += (this.length ? this.length(item) : 1)
      } else {
        var tail = this.prev
        tail.unlink()
        delete this.map[tail.key]
      }
    }
  },

  /**
   * Get a value from the map by its key, and treat it as being used.
   */
  get: function (key) {
    var item = this.map[key]
    if (item) {
      if (item !== this.next) {
        item.relink(this)
      }
      return item.value
    }
  },

  /**
   * Get a value by its key, but don't treat it as being used.
   */
  peek: function (key) {
    var item = this.map[key]
    if (item) {
      return item.value
    }
  },

  /**
   * Remove an item by linking adjacent items to each other.
   */
  remove: function (key) {
    var item = this.map[key]
    if (item) {
      var prev = item.prev
      var next = item.next
      prev.next = next
      next.prev = prev
      delete this.map[key]
      this.size -= (this.length ? this.length(item) : 1)
    }
  },

  /**
   * Iterate over the key/value pairs in the loop.
   */
  forEach: function (fn) {
    var item = this.next
    while (item !== this) {
      fn(item.value, item.key, this)
      item = item.next
    }
  },

  /**
   * Return a map of keys and values in order of time since used.
   */
  getMap: function () {
    var map = {}
    var item = this.next
    while (item !== this) {
      map[item.key] = item.value
      item = item.next
    }
    return map
  },

  /**
   * Return an array of keys in order of time since used.
   */
  getKeys: function () {
    var keys = []
    var index = 0
    var item = this.next
    while (item !== this) {
      keys[index++] = item.key
      item = item.next
    }
    return keys
  },

  /**
   * Return an array of values in order of time since used.
   */
  getValues: function () {
    var values = []
    var index = 0
    var item = this.next
    while (item !== this) {
      values[index++] = item.value
      item = item.next
    }
    return values
  },

  /**
   * Return an array of items in order of time since used.
   */
  getItems: function () {
    var items = []
    var index = 0
    var item = this.next
    while (item !== this) {
      items[index++] = item
      item = item.next
    }
    return items
  },

  Options: Type.extend({
    init: function () {},
    max: Infinity
  }),

  Item: Type.extend({

    /**
     * Create a new cache item.
     */
    init: function Item (key, value) {
      this.key = key
      this.value = value
      this.prev = null
      this.next = null
    },

    /**
     * Unlink this item from the doubly-linked loop.
     */
    unlink: function () {
      var prev = this.prev
      var next = this.next
      prev.next = next
      next.prev = prev
    },

    /**
     * Link this after another item.
     */
    link: function (item) {
      var next = item.next
      this.prev = item
      this.next = next
      item.next = this
      next.prev = this
    },

    /**
     * Unlink from the loop, and link after another item.
     */
    relink: function (item) {
      var prev = this.prev
      var next = this.next
      prev.next = next
      next.prev = prev
      next = item.next
      this.prev = item
      this.next = next
      item.next = this
      next.prev = this
    }
  })
})

var proto = LruCache.prototype
proto.del = proto.remove
proto.dump = proto.getItems
