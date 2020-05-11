/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DataFieldProviderBead.as
 * org.apache.royale.html.beads.DataFieldProviderBead
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataFieldProviderBead');
/* Royale Dependency List: org.apache.royale.core.IStrand*/

goog.require('org.apache.royale.core.IBead');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.html.beads.DataFieldProviderBead = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataFieldProviderBead', org.apache.royale.html.beads.DataFieldProviderBead);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.DataFieldProviderBead.prototype.org_apache_royale_html_beads_DataFieldProviderBead__strand;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.DataFieldProviderBead.prototype.org_apache_royale_html_beads_DataFieldProviderBead__dataField = null;


org.apache.royale.html.beads.DataFieldProviderBead.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_DataFieldProviderBead__strand = value;
};


org.apache.royale.html.beads.DataFieldProviderBead.prototype.get__dataField = function() {
  return this.org_apache_royale_html_beads_DataFieldProviderBead__dataField;
};


org.apache.royale.html.beads.DataFieldProviderBead.prototype.set__dataField = function(value) {
  if (value != this.org_apache_royale_html_beads_DataFieldProviderBead__dataField) {
    this.org_apache_royale_html_beads_DataFieldProviderBead__dataField = value;
  }
};


Object.defineProperties(org.apache.royale.html.beads.DataFieldProviderBead.prototype, /** @lends {org.apache.royale.html.beads.DataFieldProviderBead.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.DataFieldProviderBead.prototype.set__strand},
/**
  * @export
  * @type {string} */
dataField: {
get: org.apache.royale.html.beads.DataFieldProviderBead.prototype.get__dataField,
set: org.apache.royale.html.beads.DataFieldProviderBead.prototype.set__dataField}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataFieldProviderBead.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataFieldProviderBead', qName: 'org.apache.royale.html.beads.DataFieldProviderBead', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataFieldProviderBead.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.DataFieldProviderBead'},
        'dataField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.DataFieldProviderBead'}
      };
    },
    methods: function () {
      return {
        'DataFieldProviderBead': { type: '', declaredBy: 'org.apache.royale.html.beads.DataFieldProviderBead'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DataFieldProviderBead.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
