/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/LayoutBase.as
 * org.apache.royale.core.LayoutBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.LayoutBase');
/* Royale Dependency List: org.apache.royale.core.IBorderPaddingMarginValuesImpl,org.apache.royale.core.ILayoutChild,org.apache.royale.core.ILayoutHost,org.apache.royale.core.ILayoutParent,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.core.layout.EdgeData,org.apache.royale.core.layout.MarginData,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBeadLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @implements {org.apache.royale.core.IBeadLayout}
 */
org.apache.royale.core.LayoutBase = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.LayoutBase', org.apache.royale.core.LayoutBase);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_sawInitComplete;


/**
 * @protected
 * @type {org.apache.royale.core.ILayoutChild}
 */
org.apache.royale.core.LayoutBase.prototype.host;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_lastWidth = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_lastHeight = -1;


/**
 * Changes in size to the host strand are handled (by default) by running the
 * layout sequence. Subclasses can override this function and use event.type
 * to handle specific changes in dimension.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleSizeChange = function(event) {
  if (this.host.width == this.org_apache_royale_core_LayoutBase_lastWidth && this.host.height == this.org_apache_royale_core_LayoutBase_lastHeight)
    return;
  this.performLayout();
  this.org_apache_royale_core_LayoutBase_lastWidth = this.host.width;
  this.org_apache_royale_core_LayoutBase_lastHeight = this.host.height;
};


/**
 * Handles the addition of children to the host's layoutView by listening for
 * size changes in the children.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleChildrenAdded = function(event) {
  
  if (this.org_apache_royale_core_LayoutBase_sawInitComplete) {
    this.performLayout();
  }
};


/**
 * If changes happen to a layoutView's child, this function will perform the
 * layout again.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.ILayoutParent
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.childResizeHandler = function(event) {
  var /** @type {org.apache.royale.core.ILayoutHost} */ viewBead;
  if (event.type == "widthChanged" && !(this.host.isWidthSizedToContent() || !isNaN(this.host.explicitWidth))) {
    viewBead = this.host.getLayoutHost();
    viewBead.beforeLayout();
    viewBead.afterLayout();
    return;
  }
  if (event.type == "heightChanged" && !(this.host.isHeightSizedToContent() || !isNaN(this.host.explicitHeight))) {
    viewBead = this.host.getLayoutHost();
    viewBead.beforeLayout();
    viewBead.afterLayout();
    return;
  }
  if (event.type == "sizeChanged" && !(this.host.isHeightSizedToContent() || !isNaN(this.host.explicitHeight)) && !(this.host.isWidthSizedToContent() || !isNaN(this.host.explicitWidth))) {
    viewBead = this.host.getLayoutHost();
    viewBead.beforeLayout();
    viewBead.afterLayout();
    return;
  }
  this.performLayout();
};


/**
 * Called whenever "layoutNeeded" event is dispatched against the host strand.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleLayoutNeeded = function(event) {
  this.performLayout();
};


/**
 * Handles the final start-up condition by running the layout an initial time.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleInitComplete = function(event) {
  this.org_apache_royale_core_LayoutBase_sawInitComplete = true;
  
  this.performLayout();
};


/**
 * Returns an object of margins for the given child.
 * 
 * @asparam child Object The element whose margins are required.
 * @asparam hostWidth Number The usable width dimension of the host.
 * @asparam hostHeight Number The usable height dimension of the host.
 * 
 * @asreturn Object A structure of {top:Number, left:Number, bottom:Number, right:Number}
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.IBorderPaddingMarginValuesImpl
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @protected
 * @param {Object} child
 * @param {number} hostWidth
 * @param {number} hostHeight
 * @return {org.apache.royale.core.layout.MarginData}
 */
org.apache.royale.core.LayoutBase.prototype.childMargins = function(child, hostWidth, hostHeight) {
  var /** @type {org.apache.royale.core.layout.MarginData} */ md = org.apache.royale.core.ValuesManager["valuesImpl"].getMargins(child, hostWidth, hostHeight);
  return md;
};


/**
 * Returns an object containing the child's positioning values.
 * 
 * @asparam child Object The element whose positions are required.
 * 
 * @asreturn Object A structure of {top:Number, left:Number, bottom:Number, right:Number}
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.IBorderPaddingMarginValuesImpl
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @protected
 * @param {Object} child
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.LayoutBase.prototype.childPositions = function(child) {
  var /** @type {org.apache.royale.core.layout.EdgeData} */ ed = org.apache.royale.core.ValuesManager["valuesImpl"].getPositions(child);
  return ed;
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_isLayoutRunning = false;


/**
 * Performs the layout in three parts: before, layout, after.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @royaleignorecoercion org.apache.royale.core.ILayoutParent
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @export
 */
org.apache.royale.core.LayoutBase.prototype.performLayout = function() {
  if (this.org_apache_royale_core_LayoutBase_isLayoutRunning)
    return;
  this.org_apache_royale_core_LayoutBase_isLayoutRunning = true;
  var /** @type {org.apache.royale.core.ILayoutHost} */ viewBead = this.host.getLayoutHost();
  viewBead.beforeLayout();
  if (this.layout()) {
    viewBead.afterLayout();
  }
  this.org_apache_royale_core_LayoutBase_isLayoutRunning = false;
  this.host.dispatchEvent(new org.apache.royale.events.Event("layoutComplete"));
};


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @return {boolean}
 */
org.apache.royale.core.LayoutBase.prototype.layout = function() {
  return false;
};


org.apache.royale.core.LayoutBase.prototype.set__strand = function(value) {
  this.host = value;
  var /** @type {Function} */ sizeChange = org.apache.royale.utils.Language.closure(this.handleSizeChange, this, 'handleSizeChange');
  value.addEventListener("widthChanged", sizeChange);
  value.addEventListener("heightChanged", sizeChange);
  value.addEventListener("sizeChanged", sizeChange);
  value.addEventListener("childrenAdded", org.apache.royale.utils.Language.closure(this.handleChildrenAdded, this, 'handleChildrenAdded'));
  value.addEventListener("initComplete", org.apache.royale.utils.Language.closure(this.handleInitComplete, this, 'handleInitComplete'));
  value.addEventListener("layoutNeeded", org.apache.royale.utils.Language.closure(this.handleLayoutNeeded, this, 'handleLayoutNeeded'));
};


org.apache.royale.core.LayoutBase.prototype.get__layoutView = function() {
  var /** @type {org.apache.royale.core.ILayoutHost} */ viewBead = this.host.getLayoutHost();
  return viewBead.contentView;
};


Object.defineProperties(org.apache.royale.core.LayoutBase.prototype, /** @lends {org.apache.royale.core.LayoutBase.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.core.LayoutBase.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.ILayoutView} */
layoutView: {
get: org.apache.royale.core.LayoutBase.prototype.get__layoutView}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.LayoutBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LayoutBase', qName: 'org.apache.royale.core.LayoutBase', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadLayout] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.LayoutBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.LayoutBase'}
      };
    },
    methods: function () {
      return {
        'LayoutBase': { type: '', declaredBy: 'org.apache.royale.core.LayoutBase'},
        'performLayout': { type: 'void', declaredBy: 'org.apache.royale.core.LayoutBase'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.core.LayoutBase'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.LayoutBase.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
