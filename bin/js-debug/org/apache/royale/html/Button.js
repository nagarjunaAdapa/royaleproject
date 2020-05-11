/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/Button.as
 * org.apache.royale.html.Button
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.Button');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement*/

goog.require('org.apache.royale.html.ButtonBase');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.ButtonBase}
 */
org.apache.royale.html.Button = function() {
  org.apache.royale.html.Button.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.Button, org.apache.royale.html.ButtonBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.Button', org.apache.royale.html.Button);


/**
 * @asprivate
 * @protected
 * @override
 */
org.apache.royale.html.Button.prototype.createElement = function() {
  org.apache.royale.html.Button.superClass_.createElement.apply(this);
  this.typeNames = "Button";
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.Button.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Button', qName: 'org.apache.royale.html.Button', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.Button.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'Button': { type: '', declaredBy: 'org.apache.royale.html.Button'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.Button.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
