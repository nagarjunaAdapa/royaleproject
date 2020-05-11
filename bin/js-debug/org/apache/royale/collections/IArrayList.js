/**
 * Generated by Apache Royale Compiler from org/apache/royale/collections/IArrayList.as
 * org.apache.royale.collections.IArrayList
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.collections.IArrayList');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.collections.IArrayList = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.collections.IArrayList', org.apache.royale.collections.IArrayList);
/**  * @type {Array}
 */org.apache.royale.collections.IArrayList.prototype.source;
/**
 * Returns a copy of the source array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {Array}
 */
org.apache.royale.collections.IArrayList.prototype.toArray = function() {
};
/**
 *  Fetches an item from the collection
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} index
 * @return {Object}
 */
org.apache.royale.collections.IArrayList.prototype.getItemAt = function(index) {
};
/**
 *  Fetches an item from the collection given an index.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} item
 * @return {number}
 */
org.apache.royale.collections.IArrayList.prototype.getItemIndex = function(item) {
};
/**
 *  Adds an item to the end of the array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} item
 */
org.apache.royale.collections.IArrayList.prototype.addItem = function(item) {
};
/**
 *  Inserts an item to a specific location within the array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} item
 * @param {number} index
 */
org.apache.royale.collections.IArrayList.prototype.addItemAt = function(item, index) {
};
/**
 *  Replaces the item at the given index with a new item and
 *  returns the old item.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} item
 * @param {number} index
 * @return {Object}
 */
org.apache.royale.collections.IArrayList.prototype.setItemAt = function(item, index) {
};
/**
 *  Removed an item from the array and returns it.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} item
 * @return {boolean}
 */
org.apache.royale.collections.IArrayList.prototype.removeItem = function(item) {
};
/**
 *  Removes an item from a specific location within the array and
 *  returns it.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} index
 * @return {Object}
 */
org.apache.royale.collections.IArrayList.prototype.removeItemAt = function(index) {
};
org.apache.royale.collections.IArrayList.prototype.removeAll = function() {
};
/**
 *  Signals that an item in the array has been updated.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {Object} item
 */
org.apache.royale.collections.IArrayList.prototype.itemUpdated = function(item) {
};
/**
 *  Signals that an item in the array has been updated.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} index
 */
org.apache.royale.collections.IArrayList.prototype.itemUpdatedAt = function(index) {
};
/**  * @type {number}
 */org.apache.royale.collections.IArrayList.prototype.length;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.collections.IArrayList.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IArrayList', qName: 'org.apache.royale.collections.IArrayList', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.collections.IArrayList.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'source': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.collections.IArrayList'},
        'length': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.collections.IArrayList'}
      };
    },
    methods: function () {
      return {
        'toArray': { type: 'Array', declaredBy: 'org.apache.royale.collections.IArrayList'},
        'getItemAt': { type: 'Object', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'int', optional: false } ]; }},
        'getItemIndex': { type: 'int', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'Object', optional: false } ]; }},
        'addItem': { type: 'void', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'Object', optional: false } ]; }},
        'addItemAt': { type: 'void', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'Object', optional: false },{ index: 2, type: 'int', optional: false } ]; }},
        'setItemAt': { type: 'Object', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'Object', optional: false },{ index: 2, type: 'int', optional: false } ]; }},
        'removeItem': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'Object', optional: false } ]; }},
        'removeItemAt': { type: 'Object', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'int', optional: false } ]; }},
        'removeAll': { type: 'void', declaredBy: 'org.apache.royale.collections.IArrayList'},
        'itemUpdated': { type: 'void', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'Object', optional: false } ]; }},
        'itemUpdatedAt': { type: 'void', declaredBy: 'org.apache.royale.collections.IArrayList', parameters: function () { return [ { index: 1, type: 'int', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.collections.IArrayList.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
