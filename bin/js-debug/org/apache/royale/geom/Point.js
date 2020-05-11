/**
 * Generated by Apache Royale Compiler from org/apache/royale/geom/Point.as
 * org.apache.royale.geom.Point
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.geom.Point');
/* Royale Dependency List: */



/**
 * @constructor
 * @param {number=} x
 * @param {number=} y
 */
org.apache.royale.geom.Point = function(x, y) {
  x = typeof x !== 'undefined' ? x : 0;
  y = typeof y !== 'undefined' ? y : 0;
  this.x = x;
  this.y = y;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.geom.Point', org.apache.royale.geom.Point);


/**
 * @export
 * @type {number}
 */
org.apache.royale.geom.Point.prototype.x;


/**
 * @export
 * @type {number}
 */
org.apache.royale.geom.Point.prototype.y;


/**
 * @export
 * @param {org.apache.royale.geom.Point} pt1
 * @param {org.apache.royale.geom.Point} pt2
 * @param {number} f
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.geom.Point.interpolate = function(pt1, pt2, f) {
  return new org.apache.royale.geom.Point(pt2.x + f * (pt1.x - pt2.x), pt2.y + f * (pt1.y - pt2.y));
};


/**
 * @export
 * @param {org.apache.royale.geom.Point} pt1
 * @param {org.apache.royale.geom.Point} pt2
 * @return {number}
 */
org.apache.royale.geom.Point.distance = function(pt1, pt2) {
  return pt1.subtract(pt2).length;
};


/**
 * @export
 * @param {number} len
 * @param {number} angle
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.geom.Point.polar = function(len, angle) {
  return new org.apache.royale.geom.Point(len * Math.cos(angle), len * Math.sin(angle));
};


/**
 * @export
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.geom.Point.prototype.clone = function() {
  return new org.apache.royale.geom.Point(this.x, this.y);
};


/**
 * @export
 * @param {number} dx
 * @param {number} dy
 */
org.apache.royale.geom.Point.prototype.offset = function(dx, dy) {
  this.x = this.x + dx;
  this.y = this.y + dy;
};


/**
 * @export
 * @param {org.apache.royale.geom.Point} toCompare
 * @return {boolean}
 */
org.apache.royale.geom.Point.prototype.equals = function(toCompare) {
  return toCompare.x == this.x && toCompare.y == this.y;
};


/**
 * @export
 * @param {org.apache.royale.geom.Point} v
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.geom.Point.prototype.subtract = function(v) {
  return new org.apache.royale.geom.Point(this.x - v.x, this.y - v.y);
};


/**
 * @export
 * @param {org.apache.royale.geom.Point} v
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.geom.Point.prototype.add = function(v) {
  return new org.apache.royale.geom.Point(this.x + v.x, this.y + v.y);
};


/**
 * @export
 * @param {number} thickness
 */
org.apache.royale.geom.Point.prototype.normalize = function(thickness) {
  var /** @type {number} */ invD = this.length;
  if (invD > 0) {
    invD = thickness / invD;
    this.x = this.x * invD;
    this.y = this.y * invD;
  }
};


/**
 * @export
 * @return {string}
 */
org.apache.royale.geom.Point.prototype.toString = function() {
  return "(x=" + this.x + ", y=" + this.y + ")";
};


/**
 * @export
 * @param {org.apache.royale.geom.Point} sourcePoint
 */
org.apache.royale.geom.Point.prototype.copyFrom = function(sourcePoint) {
  this.x = sourcePoint.x;
  this.y = sourcePoint.y;
};


/**
 * @export
 * @param {number} xa
 * @param {number} ya
 */
org.apache.royale.geom.Point.prototype.setTo = function(xa, ya) {
  this.x = xa;
  this.y = ya;
};


org.apache.royale.geom.Point.prototype.get__length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};


Object.defineProperties(org.apache.royale.geom.Point.prototype, /** @lends {org.apache.royale.geom.Point.prototype} */ {
/**
  * @export
  * @type {number} */
length: {
get: org.apache.royale.geom.Point.prototype.get__length}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.geom.Point.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Point', qName: 'org.apache.royale.geom.Point', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.geom.Point.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'x': { type: 'Number', get_set: function (/** org.apache.royale.geom.Point */ inst, /** * */ v) {return v !== undefined ? inst.x = v : inst.x;}},
        'y': { type: 'Number', get_set: function (/** org.apache.royale.geom.Point */ inst, /** * */ v) {return v !== undefined ? inst.y = v : inst.y;}}
      };
    },
    accessors: function () {
      return {
        'length': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.geom.Point'}
      };
    },
    methods: function () {
      return {
        'Point': { type: '', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'Number', optional: true },{ index: 2, type: 'Number', optional: true } ]; }},
        '|interpolate': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Point', optional: false },{ index: 2, type: 'org.apache.royale.geom.Point', optional: false },{ index: 3, type: 'Number', optional: false } ]; }},
        '|distance': { type: 'Number', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Point', optional: false },{ index: 2, type: 'org.apache.royale.geom.Point', optional: false } ]; }},
        '|polar': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        'clone': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.geom.Point'},
        'offset': { type: 'void', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        'equals': { type: 'Boolean', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Point', optional: false } ]; }},
        'subtract': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Point', optional: false } ]; }},
        'add': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Point', optional: false } ]; }},
        'normalize': { type: 'void', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'Number', optional: false } ]; }},
        'toString': { type: 'String', declaredBy: 'org.apache.royale.geom.Point'},
        'copyFrom': { type: 'void', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Point', optional: false } ]; }},
        'setTo': { type: 'void', declaredBy: 'org.apache.royale.geom.Point', parameters: function () { return [ { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.geom.Point.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
