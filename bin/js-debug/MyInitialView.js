/**
 * Generated by Apache Royale Compiler from MyInitialView.mxml
 * MyInitialView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('MyInitialView');
/* Royale Dependency List: org.apache.royale.html.TextButton,org.apache.royale.html.DynamicDataGrid,org.apache.royale.binding.ConstantBinding,org.apache.royale.html.supportClasses.DataGridColumn,models.ProductsModel,org.apache.royale.events.MouseEvent,products.Product*/

goog.require('org.apache.royale.core.View');



/**
 * @constructor
 * @extends {org.apache.royale.core.View}
 */
MyInitialView = function() {
  MyInitialView.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.html.TextButton}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {org.apache.royale.html.DynamicDataGrid}
   */
  this.dataGrid2_;
  
  /**
   * @private
   * @type {org.apache.royale.binding.ConstantBinding}
   */
  this.$ID1_;
  
  /**
   * @private
   * @type {org.apache.royale.html.supportClasses.DataGridColumn}
   */
  this.$ID2_;
  
  /**
   * @private
   * @type {org.apache.royale.html.supportClasses.DataGridColumn}
   */
  this.$ID3_;
  
  /**
   * @private
   * @type {org.apache.royale.html.supportClasses.DataGridColumn}
   */
  this.$ID4_;
  
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
};
goog.inherits(MyInitialView, org.apache.royale.core.View);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('MyInitialView', MyInitialView);



/**
 * @private
 */
MyInitialView.prototype.MyInitialView_addValue = function() {
  var /** @type {products.Product} */ product = new products.Product("xx100", "Nagarjuna", 9618685719, "nagarjuna.adapa@WalkingTree.tech");
  org.apache.royale.utils.Language.as(this.applicationModel, models.ProductsModel).productList.addItem(product);
};


/**
 * @private
 */
MyInitialView.prototype.MyInitialView_removeValue = function() {
  org.apache.royale.utils.Language.as(this.applicationModel, models.ProductsModel).productList.removeItemAt(2);
  org.apache.royale.utils.Language.as(this.applicationModel, models.ProductsModel).productArray.splice(2, 1);
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
MyInitialView.prototype.$EH0 = function(event)
{
  this.MyInitialView_addValue();
};


Object.defineProperties(MyInitialView.prototype, /** @lends {MyInitialView.prototype} */ {
/** @export */
    dataGrid2: {
    /** @this {MyInitialView} */
    get: function() {
      return this.dataGrid2_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.dataGrid2_) {
        this.dataGrid2_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'dataGrid2', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {MyInitialView} */
    get: function() {
      {
        if (this.mxmldd == undefined)
        {
          /** @type {Array} */
          var arr = MyInitialView.superClass_.get__MXMLDescriptor.apply(this);
          /** @type {Array} */
          var data = [
      org.apache.royale.html.TextButton,
4,
'_id',
true,
'$ID0',
'x',
true,
720,
'y',
true,
280,
'text',
true,
'Add Row',
0,
1,
'click',
this.$EH0,
null,
org.apache.royale.html.DynamicDataGrid,
9,
'id',
true,
'dataGrid2',
'x',
true,
600,
'y',
true,
310,
'width',
true,
400,
'height',
true,
350,
'visible',
true,
true,
'rowHeight',
true,
40,
'columns',
null, [org.apache.royale.html.supportClasses.DataGridColumn, 4, '_id', true, '$ID2', 'label', true, 'Name', 'dataField', true, 'name', 'columnWidth', true, 100, 0, 0, null, org.apache.royale.html.supportClasses.DataGridColumn, 4, '_id', true, '$ID3', 'label', true, 'Phone', 'dataField', true, 'phone', 'columnWidth', true, 100, 0, 0, null, org.apache.royale.html.supportClasses.DataGridColumn, 4, '_id', true, '$ID4', 'label', true, 'Email', 'dataField', true, 'email', 'columnWidth', true, 100, 0, 0, null],
'beads',
null, [org.apache.royale.binding.ConstantBinding, 4, '_id', true, '$ID1', 'sourceID', true, 'applicationModel', 'sourcePropertyName', true, 'productList', 'destinationPropertyName', true, 'dataProvider', 0, 0, null],
0,
0,
null
      ];
        
          if (arr)
            this.mxmldd = arr.concat(data);
          else
            this.mxmldd = data;
        }
        return this.mxmldd;
      }
      }
    }
  });
  /**
   * Metadata
   *
   * @type {Object.<string, Array.<Object>>}
   */
  MyInitialView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MyInitialView', qName: 'MyInitialView', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
MyInitialView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'dataGrid2': { type: 'org.apache.royale.html.DynamicDataGrid', access: 'readwrite', declaredBy: 'MyInitialView'}
      };
    },
    methods: function () {
      return {
        'MyInitialView': { type: '', declaredBy: 'MyInitialView'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
MyInitialView.prototype.ROYALE_REFLECTION_INFO.compileFlags = 9;

  
  