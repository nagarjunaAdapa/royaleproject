/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/DataContainer.as
 * org.apache.royale.html.DataContainer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.DataContainer');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IDataProviderModel,org.apache.royale.core.IListPresentationModel,org.apache.royale.html.beads.models.ListPresentationModel*/

goog.require('org.apache.royale.core.DataContainerBase');
goog.require('org.apache.royale.core.IStrandWithPresentationModel');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.DataContainerBase}
 * @implements {org.apache.royale.core.IStrandWithPresentationModel}
 */
org.apache.royale.html.DataContainer = function() {
  org.apache.royale.html.DataContainer.base(this, 'constructor');
  this.typeNames = "DataContainer";
};
goog.inherits(org.apache.royale.html.DataContainer, org.apache.royale.core.DataContainerBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.DataContainer', org.apache.royale.html.DataContainer);


org.apache.royale.html.DataContainer.prototype.get__labelField = function() {
  return this.model.labelField;
};


org.apache.royale.html.DataContainer.prototype.set__labelField = function(value) {
  this.model.labelField = value;
};


org.apache.royale.html.DataContainer.prototype.get__dataProvider = function() {
  return this.model.dataProvider;
};


org.apache.royale.html.DataContainer.prototype.set__dataProvider = function(value) {
  this.model.dataProvider = value;
};


org.apache.royale.html.DataContainer.prototype.get__presentationModel = function() {
  var /** @type {org.apache.royale.core.IListPresentationModel} */ presModel = this.getBeadByType(org.apache.royale.core.IListPresentationModel);
  if (presModel == null) {
    presModel = new org.apache.royale.html.beads.models.ListPresentationModel();
    this.addBead(presModel);
  }
  return presModel;
};


Object.defineProperties(org.apache.royale.html.DataContainer.prototype, /** @lends {org.apache.royale.html.DataContainer.prototype} */ {
/**
  * @export
  * @type {string} */
labelField: {
get: org.apache.royale.html.DataContainer.prototype.get__labelField,
set: org.apache.royale.html.DataContainer.prototype.set__labelField},
/**
  * @export
  * @type {Object} */
dataProvider: {
get: org.apache.royale.html.DataContainer.prototype.get__dataProvider,
set: org.apache.royale.html.DataContainer.prototype.set__dataProvider},
/**
  * @export
  * @type {org.apache.royale.core.IBead} */
presentationModel: {
get: org.apache.royale.html.DataContainer.prototype.get__presentationModel}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.DataContainer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataContainer', qName: 'org.apache.royale.html.DataContainer', kind: 'class' }], interfaces: [org.apache.royale.core.IStrandWithPresentationModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.DataContainer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.DataContainer'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.DataContainer'},
        'presentationModel': { type: 'org.apache.royale.core.IBead', access: 'readonly', declaredBy: 'org.apache.royale.html.DataContainer'}
      };
    },
    methods: function () {
      return {
        'DataContainer': { type: '', declaredBy: 'org.apache.royale.html.DataContainer'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.DataContainer.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
