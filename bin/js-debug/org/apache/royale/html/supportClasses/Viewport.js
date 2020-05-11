/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/supportClasses/Viewport.as
 * org.apache.royale.html.supportClasses.Viewport
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.Viewport');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.core.IUIBase,org.apache.royale.core.UIBase,org.apache.royale.core.ValuesManager,org.apache.royale.geom.Size,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IViewport');



/**
 * Constructor
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IViewport}
 */
org.apache.royale.html.supportClasses.Viewport = function() {
  org.apache.royale.html.supportClasses.Viewport.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.supportClasses.Viewport, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.Viewport', org.apache.royale.html.supportClasses.Viewport);


/**
 * @protected
 * @type {org.apache.royale.core.UIBase}
 */
org.apache.royale.html.supportClasses.Viewport.prototype.contentArea;


/**
 * @protected
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.supportClasses.Viewport.prototype._strand;


/**
 * Subclasses override this method to change scrolling behavior
 * @protected
 */
org.apache.royale.html.supportClasses.Viewport.prototype.setScrollStyle = function() {
  this.contentArea.element.style.overflow = "hidden";
};


/**
 * @copy org.apache.royale.core.IViewport#setPosition()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} x
 * @param {number} y
 */
org.apache.royale.html.supportClasses.Viewport.prototype.setPosition = function(x, y) {
  
};


/**
 * @copy org.apache.royale.core.IViewport#layoutViewportBeforeContentLayout()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} width
 * @param {number} height
 */
org.apache.royale.html.supportClasses.Viewport.prototype.layoutViewportBeforeContentLayout = function(width, height) {
  
};


/**
 * @copy org.apache.royale.core.IViewport#layoutViewportAfterContentLayout()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.geom.Size} contentSize
 */
org.apache.royale.html.supportClasses.Viewport.prototype.layoutViewportAfterContentLayout = function(contentSize) {
  
};


org.apache.royale.html.supportClasses.Viewport.prototype.get__contentView = function() {
  return this.contentArea;
};


org.apache.royale.html.supportClasses.Viewport.prototype.set__strand = function(value) {
  this._strand = value;
  var /** @type {Function} */ f = org.apache.royale.utils.Language.as(org.apache.royale.core.ValuesManager["valuesImpl"].getValue(value, "iContentView"), Function);
  if (f) {
    this.contentArea = new f();
  }
  if (!this.contentArea)
    this.contentArea = value;
  this.setScrollStyle();
};


Object.defineProperties(org.apache.royale.html.supportClasses.Viewport.prototype, /** @lends {org.apache.royale.html.supportClasses.Viewport.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IUIBase} */
contentView: {
get: org.apache.royale.html.supportClasses.Viewport.prototype.get__contentView},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.supportClasses.Viewport.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.Viewport.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Viewport', qName: 'org.apache.royale.html.supportClasses.Viewport', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IViewport] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.Viewport.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'contentView': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.html.supportClasses.Viewport'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.supportClasses.Viewport'}
      };
    },
    methods: function () {
      return {
        'Viewport': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.Viewport'},
        'setPosition': { type: 'void', declaredBy: 'org.apache.royale.html.supportClasses.Viewport', parameters: function () { return [ { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        'layoutViewportBeforeContentLayout': { type: 'void', declaredBy: 'org.apache.royale.html.supportClasses.Viewport', parameters: function () { return [ { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        'layoutViewportAfterContentLayout': { type: 'void', declaredBy: 'org.apache.royale.html.supportClasses.Viewport', parameters: function () { return [ { index: 1, type: 'org.apache.royale.geom.Size', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.supportClasses.Viewport.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
