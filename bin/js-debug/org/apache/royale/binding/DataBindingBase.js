/**
 * Generated by Apache Royale Compiler from org/apache/royale/binding/DataBindingBase.as
 * org.apache.royale.binding.DataBindingBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.DataBindingBase');
/* Royale Dependency List: org.apache.royale.binding.ConstantBinding,org.apache.royale.binding.GenericBinding,org.apache.royale.binding.PropertyWatcher,org.apache.royale.binding.WatcherBase,org.apache.royale.core.IBinding,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.binding.DataBindingBase = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.binding.DataBindingBase', org.apache.royale.binding.DataBindingBase);


/**
 * @protected
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.binding.DataBindingBase.prototype._strand;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.DataBindingBase.prototype.deferredBindings;


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.DataBindingBase.prototype.initBindingsHandler = function(event) {
};


/**
 * @royaleemitcoercion org.apache.royale.core.IStrand
 * @royaleignorecoercion org.apache.royale.core.IBead
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {Object} binding
 * @param {Object} bindingObject
 * @param {Object=} destinationObject
 */
org.apache.royale.binding.DataBindingBase.prototype.prepareCreatedBinding = function(binding, bindingObject, destinationObject) {
  destinationObject = typeof destinationObject !== 'undefined' ? destinationObject : null;
  if (!destinationObject) {
    destinationObject = this._strand[bindingObject.destination[0]];
  }
  var /** @type {org.apache.royale.core.IStrand} */ destination = org.apache.royale.utils.Language.as(destinationObject, org.apache.royale.core.IStrand);
  if (destination) {
    destination.addBead(binding);
  } else {
    if (destinationObject) {
      binding.destination = destinationObject;
      this._strand.addBead(binding);
    } else {
      if (!this.deferredBindings) {
        this.deferredBindings = {};
        this._strand.addEventListener("valueChange", org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_DataBindingBase_deferredBindingsHandler, this, 'deferredBindingsHandler'));
      }
      this.deferredBindings[bindingObject.destination[0]] = binding;
    }
  }
};


/**
 * @private
 * @param {Object} children
 * @param {number} index
 * @return {boolean}
 */
org.apache.royale.binding.DataBindingBase.prototype.org_apache_royale_binding_DataBindingBase_watcherChildrenRelevantToIndex = function(children, index) {
  var /** @type {Array} */ watchers = children ? children.watchers : null;
  var /** @type {boolean} */ hasValidWatcherChild = false;
  if (watchers) {
    var /** @type {number} */ l = (watchers.length) >>> 0;
    while (l--) {
      var /** @type {Object} */ watcher = watchers[l];
      if (typeof((watcher.bindings)) == "number") {
        hasValidWatcherChild = (watcher.bindings == index);
      } else {
        hasValidWatcherChild = (watcher.bindings.indexOf(index) != -1);
      }
      if (!hasValidWatcherChild && watcher.children) {
        hasValidWatcherChild = this.org_apache_royale_binding_DataBindingBase_watcherChildrenRelevantToIndex(watcher.children, index);
      }
      if (hasValidWatcherChild)
        break;
    }
  }
  return hasValidWatcherChild;
};


/**
 * @royaleignorecoercion Function
 * @royaleignorecoercion String
 * @protected
 * @param {org.apache.royale.binding.GenericBinding} gb
 * @param {number} index
 * @param {Array} watchers
 * @param {org.apache.royale.binding.WatcherBase} parentWatcher
 */
org.apache.royale.binding.DataBindingBase.prototype.setupWatchers = function(gb, index, watchers, parentWatcher) {
  var /** @type {boolean} */ foundWatcher = false;
  var /** @type {number} */ n = (watchers.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ watcher = watchers[i];
    var /** @type {boolean} */ isValidWatcher = false;
    if (typeof((watcher.bindings)) == "number") {
      isValidWatcher = (watcher.bindings == index);
    } else {
      isValidWatcher = (watcher.bindings.indexOf(index) != -1);
    }
    if (isValidWatcher) {
      var /** @type {boolean} */ hasWatcherChildren = this.org_apache_royale_binding_DataBindingBase_watcherChildrenRelevantToIndex(watcher.children, index);
      var /** @type {string} */ type = watcher.type;
      var /** @type {Object} */ parentObj = this._strand;
      switch (type) {
        case "static":
          parentObj = watcher.parentObj;
          gb.staticRoot = parentObj;
          gb.isStatic = true;
          break;
        case "property":
          var /** @type {Function} */ getterFunction = watcher.getterFunction;
          if (typeof((gb.source)) === "function" && !hasWatcherChildren) {
            getterFunction =  /** @type {Function} */ (gb.source);
          }
          var /** @type {org.apache.royale.binding.PropertyWatcher} */ pw = new org.apache.royale.binding.PropertyWatcher(this._strand, watcher.propertyName, watcher.eventNames, getterFunction);
          watcher.watcher = pw;
          if (parentWatcher) {
            pw.parentChanged(parentWatcher.value);
          } else {
            pw.parentChanged(parentObj);
          }
          if (parentWatcher) {
            parentWatcher.addChild(pw);
          }
          if (!hasWatcherChildren) {
            pw.addBinding(gb);
          }
          foundWatcher = true;
          break;
      }
      if (hasWatcherChildren) {
        this.setupWatchers(gb, index, watcher.children.watchers, watcher.watcher);
      }
    }
  }
  if (!foundWatcher) {
    if (parentWatcher) {
      gb.valueChanged(parentWatcher.value, true);
    } else {
      gb.valueChanged(null, true);
    }
  }
};


/**
 * @protected
 * @param {Array} bindingData
 * @return {Object}
 */
org.apache.royale.binding.DataBindingBase.prototype.decodeWatcher = function(bindingData) {
  var /** @type {Object} */ watcherMap = {};
  var /** @type {Array} */ watchers = [];
  var /** @type {number} */ n = (bindingData.length) >> 0;
  var /** @type {number} */ index = 0;
  var /** @type {Object} */ watcherData;
  while (index < n - 1) {
    var /** @type {number} */ watcherIndex = (bindingData[index++]) >> 0;
    var /** @type {number} */ type = (bindingData[index++]) >> 0;
    switch (type) {
      case 0:
        watcherData = {type:"function"};
        watcherData.functionName = bindingData[index++];
        watcherData.paramFunction = bindingData[index++];
        watcherData.eventNames = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        break;
      case 1:
        watcherData = {type:"static"};
        watcherData.propertyName = bindingData[index++];
        watcherData.eventNames = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        watcherData.getterFunction = bindingData[index++];
        watcherData.parentObj = bindingData[index++];
        watcherMap[watcherData.propertyName] = watcherData;
        break;
      case 2:
        watcherData = {type:"property"};
        watcherData.propertyName = bindingData[index++];
        watcherData.eventNames = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        watcherData.getterFunction = bindingData[index++];
        watcherMap[watcherData.propertyName] = watcherData;
        break;
      case 3:
        watcherData = {type:"xml"};
        watcherData.propertyName = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        watcherMap[watcherData.propertyName] = watcherData;
        break;
    }
    watcherData.children = bindingData[index++];
    if (watcherData.children != null) {
      watcherData.children = this.decodeWatcher(watcherData.children);
    }
    watcherData.index = watcherIndex;
    watchers.push(watcherData);
  }
  return {watchers:watchers, watcherMap:watcherMap};
};


/**
 * @royaleignorecoercion org.apache.royale.core.IBinding
 * @protected
 * @param {Object} binding
 */
org.apache.royale.binding.DataBindingBase.prototype.makeConstantBinding = function(binding) {
  var /** @type {org.apache.royale.binding.ConstantBinding} */ cb = new org.apache.royale.binding.ConstantBinding();
  cb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
  if (org.apache.royale.utils.Language.is(binding.source, String)) {
    cb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source);
  } else {
    cb.sourceID = org.apache.royale.utils.Language.string(binding.source[0]);
    cb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
  }
  cb.setDocument(this._strand);
  this.prepareCreatedBinding(cb, binding);
};


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.DataBindingBase.prototype.org_apache_royale_binding_DataBindingBase_deferredBindingsHandler = function(event) {
  for (var /** @type {string} */ p in this.deferredBindings) {
    if (this._strand[p] != null) {
      var /** @type {org.apache.royale.core.IStrand} */ destination = org.apache.royale.utils.Language.as(this._strand[p], org.apache.royale.core.IStrand);
      if (destination) {
        destination.addBead(this.deferredBindings[p]);
      } else {
        var /** @type {Object} */ destObject = this._strand[p];
        if (destObject) {
          this.deferredBindings[p].destination = destObject;
          this._strand.addBead(this.deferredBindings[p]);
        } else {
          org.apache.royale.utils.Language.trace("unexpected condition in deferredBindingsHandler");
        }
      }
      delete this.deferredBindings[p];
    }
  }
};


org.apache.royale.binding.DataBindingBase.prototype.set__strand = function(value) {
  this._strand = value;
  this._strand.addEventListener("initBindings", org.apache.royale.utils.Language.closure(this.initBindingsHandler, this, 'initBindingsHandler'));
};


Object.defineProperties(org.apache.royale.binding.DataBindingBase.prototype, /** @lends {org.apache.royale.binding.DataBindingBase.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.binding.DataBindingBase.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.DataBindingBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataBindingBase', qName: 'org.apache.royale.binding.DataBindingBase', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.DataBindingBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.binding.DataBindingBase'}
      };
    },
    methods: function () {
      return {
        'DataBindingBase': { type: '', declaredBy: 'org.apache.royale.binding.DataBindingBase'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.binding.DataBindingBase.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;