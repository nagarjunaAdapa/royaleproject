/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IBead.as
 * org.apache.royale.core.IBead
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IBead');
/* Royale Dependency List: org.apache.royale.core.IStrand*/




/**
 * @interface
 */
org.apache.royale.core.IBead = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IBead', org.apache.royale.core.IBead);
/**  * @type {org.apache.royale.core.IStrand}
 */org.apache.royale.core.IBead.prototype.strand;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IBead.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBead', qName: 'org.apache.royale.core.IBead', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IBead.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.IBead'}
      };
    },
    methods: function () {return {};}
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.IBead.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
