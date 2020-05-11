/**
 * Generated by Apache Royale Compiler from Royale_Grid_Project.mxml
 * Royale_Grid_Project
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('Royale_Grid_Project');
goog.require('MyInitialView');
goog.require('models.ProductsModel');
goog.require('org.apache.royale.core.Application');
goog.require('org.apache.royale.core.ItemRendererClassFactory');
goog.require('org.apache.royale.core.ItemRendererClassFactory');
goog.require('org.apache.royale.core.ItemRendererClassFactory');
goog.require('org.apache.royale.core.ItemRendererClassFactory');
goog.require('org.apache.royale.core.ItemRendererClassFactory');
goog.require('org.apache.royale.core.ItemRendererClassFactory');
goog.require('org.apache.royale.core.SimpleCSSValuesImpl');
goog.require('org.apache.royale.html.DataGridButtonBar');
goog.require('org.apache.royale.html.beads.ButtonBarView');
goog.require('org.apache.royale.html.beads.ButtonBarView');
goog.require('org.apache.royale.html.beads.ContainerView');
goog.require('org.apache.royale.html.beads.DataContainerView');
goog.require('org.apache.royale.html.beads.DataGridColumnChangePropagator');
goog.require('org.apache.royale.html.beads.DataGridColumnChangePropagator');
goog.require('org.apache.royale.html.beads.DataGridListArea');
goog.require('org.apache.royale.html.beads.DataGridView');
goog.require('org.apache.royale.html.beads.DataGridView');
goog.require('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData');
goog.require('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData');
goog.require('org.apache.royale.html.beads.DataItemRendererFactoryForArrayData');
goog.require('org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView');
goog.require('org.apache.royale.html.beads.GroupView');
goog.require('org.apache.royale.html.beads.ListView');
goog.require('org.apache.royale.html.beads.ListView');
goog.require('org.apache.royale.html.beads.ListView');
goog.require('org.apache.royale.html.beads.TextItemRendererFactoryForArrayData');
goog.require('org.apache.royale.html.beads.TextItemRendererFactoryForArrayData');
goog.require('org.apache.royale.html.beads.controllers.ItemRendererMouseController');
goog.require('org.apache.royale.html.beads.controllers.ItemRendererMouseController');
goog.require('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
goog.require('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
goog.require('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
goog.require('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
goog.require('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
goog.require('org.apache.royale.html.beads.layouts.BasicLayout');
goog.require('org.apache.royale.html.beads.layouts.BasicLayout');
goog.require('org.apache.royale.html.beads.layouts.ButtonBarLayout');
goog.require('org.apache.royale.html.beads.layouts.ButtonBarLayout');
goog.require('org.apache.royale.html.beads.layouts.ButtonBarLayout');
goog.require('org.apache.royale.html.beads.layouts.DataGridLayout');
goog.require('org.apache.royale.html.beads.layouts.DataGridLayout');
goog.require('org.apache.royale.html.beads.layouts.DataGridPercentageLayout');
goog.require('org.apache.royale.html.beads.layouts.HorizontalLayout');
goog.require('org.apache.royale.html.beads.layouts.VerticalLayout');
goog.require('org.apache.royale.html.beads.layouts.VerticalLayout');
goog.require('org.apache.royale.html.beads.layouts.VerticalLayout');
goog.require('org.apache.royale.html.beads.layouts.VerticalLayout');
goog.require('org.apache.royale.html.beads.models.ArraySelectionModel');
goog.require('org.apache.royale.html.beads.models.ButtonBarModel');
goog.require('org.apache.royale.html.beads.models.ButtonBarModel');
goog.require('org.apache.royale.html.beads.models.DataGridCollectionViewModel');
goog.require('org.apache.royale.html.beads.models.DataGridCollectionViewModel');
goog.require('org.apache.royale.html.beads.models.DataGridModel');
goog.require('org.apache.royale.html.beads.models.DataGridModel');
goog.require('org.apache.royale.html.beads.models.DataGridPresentationModel');
goog.require('org.apache.royale.html.beads.models.DataGridPresentationModel');
goog.require('org.apache.royale.html.beads.models.DataProviderModel');
goog.require('org.apache.royale.html.beads.models.ViewportModel');
goog.require('org.apache.royale.html.beads.models.ViewportModel');
goog.require('org.apache.royale.html.beads.models.ViewportModel');
goog.require('org.apache.royale.html.beads.models.ViewportModel');
goog.require('org.apache.royale.html.beads.models.ViewportModel');
goog.require('org.apache.royale.html.beads.models.ViewportModel');
goog.require('org.apache.royale.html.supportClasses.DataGridColumnList');
goog.require('org.apache.royale.html.supportClasses.DynamicDataGridColumnList');
goog.require('org.apache.royale.html.supportClasses.ScrollingViewport');
goog.require('org.apache.royale.html.supportClasses.ScrollingViewport');
goog.require('org.apache.royale.html.supportClasses.StringItemRenderer');
goog.require('org.apache.royale.html.supportClasses.StringItemRenderer');
goog.require('org.apache.royale.html.supportClasses.StringItemRenderer');
goog.require('org.apache.royale.html.supportClasses.StringItemRenderer');
goog.require('org.apache.royale.html.supportClasses.TextButtonItemRenderer');
goog.require('org.apache.royale.html.supportClasses.TextButtonItemRenderer');
goog.require('org.apache.royale.html.supportClasses.Viewport');
goog.require('org.apache.royale.html.supportClasses.Viewport');
goog.require('org.apache.royale.html.supportClasses.Viewport');
goog.require('org.apache.royale.html.supportClasses.Viewport');
goog.require('org.apache.royale.core.Application');
goog.require('org.apache.royale.core.ClassFactory');
goog.require('org.apache.royale.debugging.assert');
goog.require('org.apache.royale.events.ItemRendererEvent');
goog.require('org.apache.royale.events.CollectionEvent');
goog.require('org.apache.royale.utils.StringUtil');
goog.require('org.apache.royale.core.IStyleObject');
goog.require('org.apache.royale.utils.MXMLDataInterpreter');
goog.require('org.apache.royale.utils.StringTrimmer');
goog.require('org.apache.royale.events.ItemClickedEvent');
goog.require('org.apache.royale.html.util.getLabelFromData');
goog.require('org.apache.royale.core.layout.MarginData');
goog.require('org.apache.royale.core.IStatesImpl');
goog.require('org.apache.royale.core.IMeasurementBead');
goog.require('org.apache.royale.core.SimpleCSSStyles');
goog.require('org.apache.royale.utils.Endian');
goog.require('org.apache.royale.events.MouseEvent');
goog.require('org.apache.royale.core.SimpleCSSStylesWithFlex');
goog.require('org.apache.royale.html.util.addElementToWrapper');
goog.require('org.apache.royale.core.styles.BorderStyles');
goog.require('org.apache.royale.collections.ArrayList');
goog.require('org.apache.royale.html.DynamicDataGrid');
goog.require('products.Product');
goog.require('org.apache.royale.utils.CSSUtils');
goog.require('org.apache.royale.geom.Point');
goog.require('org.apache.royale.utils.PointUtils');
goog.require('org.apache.royale.utils.net.IDataInput');
goog.require('org.apache.royale.binding.ConstantBinding');
goog.require('org.apache.royale.core.ContainerBaseStrandChildren');
goog.require('org.apache.royale.events.ItemAddedEvent');
goog.require('org.apache.royale.utils.loadBeadFromValuesManager');
goog.require('org.apache.royale.events.getTargetWrapper');
goog.require('org.apache.royale.events.ItemRemovedEvent');
goog.require('org.apache.royale.html.supportClasses.DataGridColumn');
goog.require('org.apache.royale.events.ValueEvent');
goog.require('org.apache.royale.geom.Size');
goog.require('org.apache.royale.conversions.createEventInit');
goog.require('org.apache.royale.core.layout.LayoutData');
goog.require('org.apache.royale.utils.StringPadder');
goog.require('org.apache.royale.html.beads.DataFieldProviderBead');
goog.require('org.apache.royale.core.IState');
goog.require('org.apache.royale.events.ValueChangeEvent');
goog.require('org.apache.royale.utils.Timer');
goog.require('org.apache.royale.utils.BinaryData');
goog.require('org.apache.royale.utils.net.IDataOutput');
/* Royale Dependency List: org.apache.royale.core.SimpleCSSValuesImpl,models.ProductsModel,MyInitialView,org.apache.royale.html.beads.ButtonBarView,org.apache.royale.html.supportClasses.TextButtonItemRenderer,org.apache.royale.html.beads.layouts.ButtonBarLayout,org.apache.royale.html.beads.models.ButtonBarModel,org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController,org.apache.royale.core.ItemRendererClassFactory,org.apache.royale.html.beads.TextItemRendererFactoryForArrayData,org.apache.royale.html.beads.ContainerView,org.apache.royale.html.supportClasses.Viewport,org.apache.royale.html.beads.layouts.BasicLayout,org.apache.royale.html.beads.models.ViewportModel,org.apache.royale.html.beads.DataContainerView,org.apache.royale.html.supportClasses.StringItemRenderer,org.apache.royale.html.supportClasses.Viewport,org.apache.royale.html.beads.layouts.VerticalLayout,org.apache.royale.html.beads.models.DataProviderModel,org.apache.royale.core.ItemRendererClassFactory,org.apache.royale.html.beads.models.ViewportModel,org.apache.royale.html.beads.DataItemRendererFactoryForArrayData,org.apache.royale.html.beads.layouts.DataGridLayout,org.apache.royale.html.beads.layouts.ButtonBarLayout,org.apache.royale.html.beads.DataGridListArea,org.apache.royale.html.beads.models.DataGridPresentationModel,org.apache.royale.html.DataGridButtonBar,org.apache.royale.html.beads.DataGridView,org.apache.royale.html.supportClasses.DataGridColumnList,org.apache.royale.html.beads.models.DataGridModel,org.apache.royale.html.beads.DataGridColumnChangePropagator,org.apache.royale.html.beads.ButtonBarView,org.apache.royale.html.supportClasses.TextButtonItemRenderer,org.apache.royale.html.beads.layouts.ButtonBarLayout,org.apache.royale.html.beads.models.ButtonBarModel,org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController,org.apache.royale.core.ItemRendererClassFactory,org.apache.royale.html.beads.TextItemRendererFactoryForArrayData,org.apache.royale.html.beads.ListView,org.apache.royale.html.supportClasses.StringItemRenderer,org.apache.royale.html.supportClasses.Viewport,org.apache.royale.html.beads.layouts.VerticalLayout,org.apache.royale.html.beads.models.DataGridModel,org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController,org.apache.royale.core.ItemRendererClassFactory,org.apache.royale.html.beads.models.ViewportModel,org.apache.royale.html.beads.DataItemRendererFactoryForArrayData,org.apache.royale.html.supportClasses.ScrollingViewport,org.apache.royale.html.beads.layouts.HorizontalLayout,org.apache.royale.html.beads.models.ViewportModel,org.apache.royale.html.beads.DataGridView,org.apache.royale.html.supportClasses.DynamicDataGridColumnList,org.apache.royale.html.beads.layouts.DataGridLayout,org.apache.royale.html.beads.models.DataGridCollectionViewModel,org.apache.royale.html.beads.DataGridColumnChangePropagator,org.apache.royale.html.beads.models.DataGridPresentationModel,org.apache.royale.html.beads.ListView,org.apache.royale.html.supportClasses.StringItemRenderer,org.apache.royale.html.supportClasses.Viewport,org.apache.royale.html.beads.layouts.VerticalLayout,org.apache.royale.html.beads.models.DataGridCollectionViewModel,org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController,org.apache.royale.core.ItemRendererClassFactory,org.apache.royale.html.beads.models.ViewportModel,org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView,org.apache.royale.html.beads.controllers.ItemRendererMouseController,org.apache.royale.html.beads.ListView,org.apache.royale.html.supportClasses.StringItemRenderer,org.apache.royale.html.supportClasses.ScrollingViewport,org.apache.royale.html.beads.layouts.VerticalLayout,org.apache.royale.html.beads.models.ArraySelectionModel,org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController,org.apache.royale.core.ItemRendererClassFactory,org.apache.royale.html.beads.models.ViewportModel,org.apache.royale.html.beads.DataItemRendererFactoryForArrayData,org.apache.royale.html.beads.controllers.ItemRendererMouseController,org.apache.royale.html.beads.GroupView,org.apache.royale.html.beads.layouts.BasicLayout,org.apache.royale.html.beads.layouts.DataGridPercentageLayout*/

goog.require('org.apache.royale.core.Application');



/**
 * @constructor
 * @extends {org.apache.royale.core.Application}
 */
Royale_Grid_Project = function() {
  Royale_Grid_Project.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.core.SimpleCSSValuesImpl}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {models.ProductsModel}
   */
  this.$ID1_;
  
  /**
   * @private
   * @type {MyInitialView}
   */
  this.$ID2_;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes
  ([3,
'model',
false,
[models.ProductsModel, 1, '_id', true, '$ID1', 0, 0, null],
'valuesImpl',
false,
[org.apache.royale.core.SimpleCSSValuesImpl, 1, '_id', true, '$ID0', 0, 0, null],
'initialView',
false,
[MyInitialView, 1, '_id', true, '$ID2', 0, 0, null],
0,
0
  ]);
  
};
goog.inherits(Royale_Grid_Project, org.apache.royale.core.Application);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('Royale_Grid_Project', Royale_Grid_Project);



/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
Royale_Grid_Project.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Royale_Grid_Project', qName: 'Royale_Grid_Project', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
Royale_Grid_Project.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'Royale_Grid_Project': { type: '', declaredBy: 'Royale_Grid_Project'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
Royale_Grid_Project.prototype.ROYALE_REFLECTION_INFO.compileFlags = 9;


Royale_Grid_Project.prototype.info = function() {
  return { "compiledLocales": ["en_US"]}};


Royale_Grid_Project.prototype.cssData = [0,
1,
".Application *",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
".royale *",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
".royale *:before",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
".royale *:after",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
"org.apache.royale.core.Application",
function() {this["padding"] = 0.0;
this["margin"] = 0.0},
0,
1,
"org.apache.royale.html.ButtonBar",
function() {this["iBeadView"] = org.apache.royale.html.beads.ButtonBarView;
this["iItemRenderer"] = org.apache.royale.html.supportClasses.TextButtonItemRenderer;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.ButtonBarLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.ButtonBarModel;
this["iBeadController"] = org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController;
this["iItemRendererClassFactory"] = org.apache.royale.core.ItemRendererClassFactory;
this["iDataProviderItemRendererMapper"] = org.apache.royale.html.beads.TextItemRendererFactoryForArrayData;
this["borderStyle"] = "none"},
0,
1,
"org.apache.royale.html.Container",
function() {this["iBeadView"] = org.apache.royale.html.beads.ContainerView;
this["iViewport"] = org.apache.royale.html.supportClasses.Viewport;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.BasicLayout;
this["alignItems"] = "flex-start";
this["iViewportModel"] = org.apache.royale.html.beads.models.ViewportModel},
0,
1,
"org.apache.royale.html.DataContainer",
function() {this["iBeadView"] = org.apache.royale.html.beads.DataContainerView;
this["iItemRenderer"] = org.apache.royale.html.supportClasses.StringItemRenderer;
this["iViewport"] = org.apache.royale.html.supportClasses.Viewport;
this["borderColor"] = 2236962;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.VerticalLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.DataProviderModel;
this["borderWidth"] = 1.0;
this["iItemRendererClassFactory"] = org.apache.royale.core.ItemRendererClassFactory;
this["iViewportModel"] = org.apache.royale.html.beads.models.ViewportModel;
this["iDataProviderItemRendererMapper"] = org.apache.royale.html.beads.DataItemRendererFactoryForArrayData;
this["borderStyle"] = "solid"},
0,
1,
"org.apache.royale.html.DataGrid",
function() {this["border"] = [1.0, "solid", 2236962];
this["backgroundColor"] = 16777215;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.DataGridLayout;
this["columnLayoutClass"] = org.apache.royale.html.beads.layouts.ButtonBarLayout;
this["listAreaClass"] = org.apache.royale.html.beads.DataGridListArea;
this["iDataGridPresentationModel"] = org.apache.royale.html.beads.models.DataGridPresentationModel;
this["columnContainerClass"] = org.apache.royale.html.DataGridButtonBar;
this["iBeadView"] = org.apache.royale.html.beads.DataGridView;
this["columnClass"] = org.apache.royale.html.supportClasses.DataGridColumnList;
this["iBeadModel"] = org.apache.royale.html.beads.models.DataGridModel;
this["iChangePropagator"] = org.apache.royale.html.beads.DataGridColumnChangePropagator;
this["width"] = 200.0;
this["height"] = 200.0},
0,
1,
"org.apache.royale.html.DataGridButtonBar",
function() {this["iBeadView"] = org.apache.royale.html.beads.ButtonBarView;
this["iItemRenderer"] = org.apache.royale.html.supportClasses.TextButtonItemRenderer;
this["minHeight"] = 40.0;
this["flexGrow"] = 0.0;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.ButtonBarLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.ButtonBarModel;
this["iBeadController"] = org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController;
this["iItemRendererClassFactory"] = org.apache.royale.core.ItemRendererClassFactory;
this["iDataProviderItemRendererMapper"] = org.apache.royale.html.beads.TextItemRendererFactoryForArrayData;
this["borderStyle"] = "none";
this["height"] = 40.0},
0,
1,
"org.apache.royale.html.supportClasses.DataGridColumnList",
function() {this["iBeadView"] = org.apache.royale.html.beads.ListView;
this["iItemRenderer"] = org.apache.royale.html.supportClasses.StringItemRenderer;
this["iViewport"] = org.apache.royale.html.supportClasses.Viewport;
this["backgroundColor"] = 16777215;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.VerticalLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.DataGridModel;
this["iBeadController"] = org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController;
this["iItemRendererClassFactory"] = org.apache.royale.core.ItemRendererClassFactory;
this["iViewportModel"] = org.apache.royale.html.beads.models.ViewportModel;
this["iDataProviderItemRendererMapper"] = org.apache.royale.html.beads.DataItemRendererFactoryForArrayData;
this["borderStyle"] = "none"},
0,
1,
"org.apache.royale.html.beads.DataGridListArea",
function() {this["iViewport"] = org.apache.royale.html.supportClasses.ScrollingViewport;
this["backgroundColor"] = 16777215;
this["flexGrow"] = 1.0;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.HorizontalLayout;
this["iViewportModel"] = org.apache.royale.html.beads.models.ViewportModel},
0,
1,
"org.apache.royale.html.DynamicDataGrid",
function() {this["iBeadView"] = org.apache.royale.html.beads.DataGridView;
this["border"] = 0.0;
this["columnClass"] = org.apache.royale.html.supportClasses.DynamicDataGridColumnList;
this["backgroundColor"] = 16777215;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.DataGridLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.DataGridCollectionViewModel;
this["iChangePropagator"] = org.apache.royale.html.beads.DataGridColumnChangePropagator;
this["iDataGridPresentationModel"] = org.apache.royale.html.beads.models.DataGridPresentationModel;
this["lineHeight"] = 40.0},
0,
1,
"org.apache.royale.html.supportClasses.DynamicDataGridColumnList",
function() {this["iBeadView"] = org.apache.royale.html.beads.ListView;
this["iItemRenderer"] = org.apache.royale.html.supportClasses.StringItemRenderer;
this["iViewport"] = org.apache.royale.html.supportClasses.Viewport;
this["backgroundColor"] = 16777215;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.VerticalLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.DataGridCollectionViewModel;
this["iBeadController"] = org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController;
this["iItemRendererClassFactory"] = org.apache.royale.core.ItemRendererClassFactory;
this["iViewportModel"] = org.apache.royale.html.beads.models.ViewportModel;
this["iDataProviderItemRendererMapper"] = org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView;
this["borderStyle"] = "none"},
0,
1,
"org.apache.royale.html.supportClasses.DataItemRenderer",
function() {this["iBeadController"] = org.apache.royale.html.beads.controllers.ItemRendererMouseController},
0,
1,
"org.apache.royale.html.List",
function() {this["iBeadView"] = org.apache.royale.html.beads.ListView;
this["iItemRenderer"] = org.apache.royale.html.supportClasses.StringItemRenderer;
this["iViewport"] = org.apache.royale.html.supportClasses.ScrollingViewport;
this["border"] = [1.0, "solid", 2236962];
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.VerticalLayout;
this["iBeadModel"] = org.apache.royale.html.beads.models.ArraySelectionModel;
this["iBeadController"] = org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController;
this["iItemRendererClassFactory"] = org.apache.royale.core.ItemRendererClassFactory;
this["iViewportModel"] = org.apache.royale.html.beads.models.ViewportModel;
this["iDataProviderItemRendererMapper"] = org.apache.royale.html.beads.DataItemRendererFactoryForArrayData},
0,
1,
"org.apache.royale.html.supportClasses.StringItemRenderer",
function() {this["cursor"] = "pointer";
this["paddingBottom"] = 4.0;
this["flexGrow"] = 1.0;
this["fontFamily"] = "sans-serif";
this["flexShrink"] = 0.0;
this["iBeadController"] = org.apache.royale.html.beads.controllers.ItemRendererMouseController;
this["fontSize"] = 12.0;
this["paddingTop"] = 4.0},
0,
1,
"org.apache.royale.core.View",
function() {this["iBeadView"] = org.apache.royale.html.beads.GroupView;
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.BasicLayout},
0,
1,
"global",
function() {this["effectTimerInterval"] = 10.0},
0,
1,
"org.apache.royale.html.Button",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 16316664;
this["margin"] = 0.0;
this["borderRadius"] = 2.0},
0,
1,
"org.apache.royale.html.Button:hover",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 15263976},
0,
1,
"org.apache.royale.html.Button:active",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 14211288},
0,
1,
"js|DataGrid .DataItemRenderer",
function() {this["border"] = [1.0, "solid", 11316396];
this["lineHeight"] = 40.0},
0,
1,
"js|DataGrid .StringItemRenderer",
function() {this["border"] = [1.0, "solid", 11316396];
this["lineHeight"] = 40.0},
0,
1,
".PercentageColumnWidths",
function() {this["border"] = [1.0, "solid", 11316396];
this["iBeadLayout"] = org.apache.royale.html.beads.layouts.DataGridPercentageLayout}];
