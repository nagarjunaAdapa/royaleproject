/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DataItemRendererFactoryForArrayData.as
 * org.apache.royale.html.beads.DataItemRendererFactoryForArrayData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData');
/* Royale Dependency List: org.apache.royale.core.IDataProviderModel,org.apache.royale.core.IItemRendererClassFactory,org.apache.royale.core.IItemRendererParent,org.apache.royale.core.IListPresentationModel,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.IStrandWithModelView,org.apache.royale.core.SimpleCSSStyles,org.apache.royale.core.UIBase,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ItemRendererEvent,org.apache.royale.html.beads.DataFieldProviderBead,org.apache.royale.html.beads.IListView,org.apache.royale.html.supportClasses.DataItemRenderer,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IDataProviderItemRendererMapper');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDataProviderItemRendererMapper}
 * @param {Object=} target
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.base(this, 'constructor', target);
};
goog.inherits(org.apache.royale.html.beads.DataItemRendererFactoryForArrayData, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData', org.apache.royale.html.beads.DataItemRendererFactoryForArrayData);


/**
 * @protected
 * @type {org.apache.royale.core.IDataProviderModel}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.dataProviderModel;


/**
 * @protected
 * @type {org.apache.royale.html.beads.DataFieldProviderBead}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.dataFieldProvider;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.labelField;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.dataField;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.IDataProviderModel
 * @royaleignorecoercion org.apache.royale.core.IItemRendererClassFactory
 * @royaleignorecoercion org.apache.royale.html.beads.DataFieldProviderBead
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData_finishSetup = function(event) {
  this.dataProviderModel = this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand.getBeadByType(org.apache.royale.core.IDataProviderModel);
  this.dataProviderModel.addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
  this.labelField = this.dataProviderModel.labelField;
  this.dataFieldProvider = this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand.getBeadByType(org.apache.royale.html.beads.DataFieldProviderBead);
  if (this.dataFieldProvider) {
    this.dataField = this.dataFieldProvider.dataField;
  }
  if (!this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory)
    this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IItemRendererClassFactory, "iItemRendererClassFactory", this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand);
  this.dataProviderChangeHandler(null);
};


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory;


/**
 *  The org.apache.royale.core.IItemRendererParent that will
 *  parent the item renderers.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion Array
 *  @royaleignorecoercion org.apache.royale.core.IStrandWithModelView
 *  @royaleignorecoercion org.apache.royale.html.beads.IListView
 *  @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 *  @royaleignorecoercion org.apache.royale.core.UIBase
 *  @royaleignorecoercion org.apache.royale.core.ISelectableItemRenderer
 *  @royaleignorecoercion org.apache.royale.html.supportClasses.DataItemRenderer
 *  @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.dataProviderChangeHandler = function(event) {
  var /** @type {Array} */ dp = this.dataProviderModel.dataProvider;
  if (!dp)
    return;
  var /** @type {Object} */ view = this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand.view;
  var /** @type {org.apache.royale.core.IItemRendererParent} */ dataGroup = view.dataGroup;
  dataGroup.removeAllItemRenderers();
  var /** @type {Object} */ presentationModel = this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand.getBeadByType(org.apache.royale.core.IListPresentationModel);
  var /** @type {number} */ n = (dp.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ ir = this.itemRendererFactory.createItemRenderer(dataGroup);
    var /** @type {Object} */ dataItemRenderer = ir;
    dataGroup.addItemRenderer(ir, false);
    ir.index = i;
    ir.labelField = this.labelField;
    if (dataItemRenderer) {
      dataItemRenderer.dataField = this.dataField;
    }
    if (presentationModel) {
      var /** @type {org.apache.royale.core.SimpleCSSStyles} */ style = new org.apache.royale.core.SimpleCSSStyles();
      style.marginBottom = presentationModel.separatorThickness;
      ir.style = style;
      ir.height = presentationModel.rowHeight;
      ir.percentWidth = 100;
    }
    ir.data = dp[i];
    var /** @type {org.apache.royale.events.ItemRendererEvent} */ newEvent = new org.apache.royale.events.ItemRendererEvent(org.apache.royale.events.ItemRendererEvent.CREATED);
    newEvent.itemRenderer = ir;
    this.dispatchEvent(newEvent);
  }
  this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand.dispatchEvent(new org.apache.royale.events.Event("itemsCreated"));
};


org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand = value;
  value.addEventListener("initComplete", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData_finishSetup, this, 'finishSetup'));
};


org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.get__itemRendererFactory = function() {
  if (!this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory)
    this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IItemRendererClassFactory, "iItemRendererClassFactory", this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__strand);
  return this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory;
};


org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.set__itemRendererFactory = function(value) {
  this.org_apache_royale_html_beads_DataItemRendererFactoryForArrayData__itemRendererFactory = value;
};


Object.defineProperties(org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype, /** @lends {org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.IItemRendererClassFactory} */
itemRendererFactory: {
get: org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.get__itemRendererFactory,
set: org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.set__itemRendererFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataItemRendererFactoryForArrayData', qName: 'org.apache.royale.html.beads.DataItemRendererFactoryForArrayData', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDataProviderItemRendererMapper] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.DataItemRendererFactoryForArrayData'},
        'itemRendererFactory': { type: 'org.apache.royale.core.IItemRendererClassFactory', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.DataItemRendererFactoryForArrayData'}
      };
    },
    methods: function () {
      return {
        'DataItemRendererFactoryForArrayData': { type: '', declaredBy: 'org.apache.royale.html.beads.DataItemRendererFactoryForArrayData', parameters: function () { return [ { index: 1, type: 'Object', optional: true } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForArrayData.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;