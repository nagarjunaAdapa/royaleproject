/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/Event.as
 * org.apache.royale.events.Event
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.Event');
/* Royale Dependency List: org.apache.royale.core.IRoyaleElement,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.IRoyaleEvent');



/**
 * @constructor
 * @extends {goog.events.Event}
 * @implements {org.apache.royale.events.IRoyaleEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.royale.events.Event = function(type, bubbles, cancelable) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  org.apache.royale.events.Event.base(this, 'constructor', type);
  this.bubbles = bubbles;
  this.cancelable = cancelable;
};
goog.inherits(org.apache.royale.events.Event, goog.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.Event', org.apache.royale.events.Event);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.Event.CHANGE = "change";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.Event.COMPLETE = "complete";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.Event.SELECT = "select";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.Event.OPEN = "open";


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.Event.prototype.bubbles;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.Event.prototype.cancelable;


/**
 * Google Closure doesn't seem to support stopImmediatePropagation, but
 * actually the ElementWrapper fireListener override sends a
 * BrowserEvent in most/all cases where folks need stopImmediatePropagation
 * so we put this in here for compile time since it will exist in
 * the BrowserEvent that does get sent around.
 * @export
 */
org.apache.royale.events.Event.prototype.stopImmediatePropagation = function() {
  throw new Error("stopImmediatePropagation");
};


/**
 * @export
 * @return {org.apache.royale.events.IRoyaleEvent}
 */
org.apache.royale.events.Event.prototype.cloneEvent = function() {
  return new org.apache.royale.events.Event(this.type, this.bubbles, this.cancelable);
};


/**
 * @export
 * @return {boolean}
 */
org.apache.royale.events.Event.prototype.isDefaultPrevented = function() {
  return this.defaultPrevented;
};


/**
 * Determine if the target is the same as the event's target.  The event's target
 * can sometimes be an internal target so this tests if the outer component
 * matches the potential target
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @royaleignorecoercion Object
 * @export
 * @param {org.apache.royale.events.IEventDispatcher} potentialTarget
 * @return {boolean}
 */
org.apache.royale.events.Event.prototype.isSameTarget = function(potentialTarget) {
  if (potentialTarget === this.target)
    return true;
  if (org.apache.royale.utils.Language.is(this.target, org.apache.royale.core.IRoyaleElement) && this.target.royale_wrapper === potentialTarget)
    return true;
  return false;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.Event.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Event', qName: 'org.apache.royale.events.Event', kind: 'class' }], interfaces: [org.apache.royale.events.IRoyaleEvent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.Event.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'bubbles': { type: 'Boolean', get_set: function (/** org.apache.royale.events.Event */ inst, /** * */ v) {return v !== undefined ? inst.bubbles = v : inst.bubbles;}},
        'cancelable': { type: 'Boolean', get_set: function (/** org.apache.royale.events.Event */ inst, /** * */ v) {return v !== undefined ? inst.cancelable = v : inst.cancelable;}}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'Event': { type: '', declaredBy: 'org.apache.royale.events.Event', parameters: function () { return [ { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'stopImmediatePropagation': { type: 'void', declaredBy: 'org.apache.royale.events.Event'},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.Event'},
        'isDefaultPrevented': { type: 'Boolean', declaredBy: 'org.apache.royale.events.Event'},
        'isSameTarget': { type: 'Boolean', declaredBy: 'org.apache.royale.events.Event', parameters: function () { return [ { index: 1, type: 'org.apache.royale.events.IEventDispatcher', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.events.Event.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
