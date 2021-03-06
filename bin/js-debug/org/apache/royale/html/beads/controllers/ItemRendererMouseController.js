/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/controllers/ItemRendererMouseController.as
 * org.apache.royale.html.beads.controllers.ItemRendererMouseController
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.controllers.ItemRendererMouseController');
/* Royale Dependency List: org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.BrowserEvent,org.apache.royale.events.ItemClickedEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBeadController');



/**
 *  constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @implements {org.apache.royale.core.IBeadController}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.controllers.ItemRendererMouseController', org.apache.royale.html.beads.controllers.ItemRendererMouseController);


/**
 * @private
 * @type {org.apache.royale.core.ISelectableItemRenderer}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.org_apache_royale_html_beads_controllers_ItemRendererMouseController_renderer;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.org_apache_royale_html_beads_controllers_ItemRendererMouseController__strand;


/**
 * @royaleemitcoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseOver = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    target.dispatchEvent(new goog.events.Event("itemRollOver", true));
  }
};


/**
 * @royaleemitcoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseOut = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    target.dispatchEvent(new goog.events.Event("itemRollOut", true));
  }
};


/**
 * @asprivate
 * @royaleemitcoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseDown = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    target.down = true;
    target.hovered = false;
    var /** @type {Object} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemMouseDown");
    newEvent.data = target.data;
    newEvent.multipleSelection = event.shiftKey;
    newEvent.index = target.index;
    target.dispatchEvent(newEvent);
  }
};


/**
 * @asprivate
 * @royaleemitcoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseClick = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    var /** @type {Object} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemClicked");
    newEvent.data = target.data;
    newEvent.multipleSelection = event.shiftKey;
    newEvent.index = target.index;
    target.dispatchEvent(newEvent);
  }
};


/**
 * @asprivate
 * @royaleemitcoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {Object} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseUp = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    var /** @type {Object} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemMouseUp");
    newEvent.data = target.data;
    newEvent.multipleSelection = event.shiftKey;
    newEvent.index = target.index;
    target.dispatchEvent(newEvent);
  }
};


org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_controllers_ItemRendererMouseController__strand = value;
  this.org_apache_royale_html_beads_controllers_ItemRendererMouseController_renderer = value;
  
  var /** @type {Object} */ element = this.org_apache_royale_html_beads_controllers_ItemRendererMouseController__strand.element;
  goog.events.listen(element, goog.events.EventType.MOUSEOVER, org.apache.royale.utils.Language.closure(this.handleMouseOver, this, 'handleMouseOver'));
  goog.events.listen(element, goog.events.EventType.MOUSEOUT, org.apache.royale.utils.Language.closure(this.handleMouseOut, this, 'handleMouseOut'));
  goog.events.listen(element, goog.events.EventType.MOUSEDOWN, org.apache.royale.utils.Language.closure(this.handleMouseDown, this, 'handleMouseDown'));
  goog.events.listen(element, goog.events.EventType.CLICK, org.apache.royale.utils.Language.closure(this.handleMouseClick, this, 'handleMouseClick'));
  goog.events.listen(element, goog.events.EventType.MOUSEUP, org.apache.royale.utils.Language.closure(this.handleMouseUp, this, 'handleMouseUp'));
};


Object.defineProperties(org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype, /** @lends {org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ItemRendererMouseController', qName: 'org.apache.royale.html.beads.controllers.ItemRendererMouseController', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadController] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.controllers.ItemRendererMouseController'}
      };
    },
    methods: function () {
      return {
        'ItemRendererMouseController': { type: '', declaredBy: 'org.apache.royale.html.beads.controllers.ItemRendererMouseController'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
