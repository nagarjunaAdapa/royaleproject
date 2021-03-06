/**
 * Generated by Apache Royale Compiler from QName.as
 * QName
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('QName');
/* Royale Dependency List: Namespace,org.apache.royale.utils.Language*/




/**
 * @royaleignorecoercion Namespace
 * @constructor
 * @param {*=} qNameOrUri
 * @param {*=} localNameVal
 */
QName = function(qNameOrUri, localNameVal) {
  qNameOrUri = typeof qNameOrUri !== 'undefined' ? qNameOrUri : null;
  localNameVal = typeof localNameVal !== 'undefined' ? localNameVal : null;
  if (qNameOrUri != null) {
    if (org.apache.royale.utils.Language.is(qNameOrUri, QName)) {
      this.QName__uri = org.apache.royale.utils.Language.string(qNameOrUri.uri);
      this.QName__localName = org.apache.royale.utils.Language.string(qNameOrUri.localName);
      this.QName__prefix = org.apache.royale.utils.Language.string(qNameOrUri.prefix);
    } else if (org.apache.royale.utils.Language.is(qNameOrUri, Namespace)) {
      this.QName__uri = qNameOrUri.uri;
      this.QName__prefix = qNameOrUri.prefix;
      if (localNameVal)
        this.QName__localName = localNameVal.toString();
    } else if (localNameVal) {
      this.QName__localName = org.apache.royale.utils.Language.string(localNameVal);
      this.QName__uri = org.apache.royale.utils.Language.string(qNameOrUri);
    } else if (qNameOrUri && qNameOrUri.toString()) {
      this.QName__localName = qNameOrUri.toString();
    }
  }
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('QName', QName);


/**
 * @private
 * @type {string}
 */
QName.prototype.QName__uri;


/**
 * @private
 * @type {string}
 */
QName.prototype.QName__localName;


/**
 * @private
 * @type {string}
 */
QName.prototype.QName__prefix;


/**
 * @export
 * @return {string}
 */
QName.prototype.objectAccessFormat = function() {
  var /** @type {string} */ uriVal = this.QName__uri ? this.QName__uri : "*";
  uriVal = uriVal.replace(/:/g, "_");
  uriVal = uriVal.replace(/\./g, "_");
  uriVal = uriVal.replace(/\//g, "$");
  return uriVal + "__" + this.QName__localName;
};


/**
 * @export
 * @param {QName} name
 * @return {boolean}
 */
QName.prototype.equals = function(name) {
  return name != null && this.uri == name.uri && this.localName == name.localName;
};


/**
 * @export
 * @param {QName} name
 * @return {boolean}
 */
QName.prototype.matches = function(name) {
  if (name == null)
    return this.localName == "*";
  if (this.uri == "*" || name.uri == "*")
    return this.localName == "*" || name.localName == "*" || this.localName == name.localName;
  if (this.localName == "*" || name.localName == "*")
    return this.uri == name.uri;
  return this.uri == name.uri && this.localName == name.localName;
};


/**
 * @private
 * @type {boolean}
 */
QName.prototype.QName__isAttribute;


/**
 * @export
 * @param {Array=} namespaces
 * @return {Namespace}
 */
QName.prototype.getNamespace = function(namespaces) {
  namespaces = typeof namespaces !== 'undefined' ? namespaces : null;
  var /** @type {number} */ i = 0;
  //var /** @type {number} */ i = 0;
  var /** @type {Namespace} */ possibleMatch;
  if (!namespaces)
    namespaces = [];
  for (i = 0; i < namespaces.length; i++) {
    if (namespaces[i].uri == this.QName__uri) {
      possibleMatch = namespaces[i];
      if (namespaces[i].prefix == this.QName__prefix)
        return namespaces[i];
    }
  }
  if (possibleMatch)
    return possibleMatch;
  if (!this.QName__prefix)
    return new Namespace(this.QName__uri);
  return new Namespace(this.QName__prefix, this.QName__uri);
};


/**
 * @export
 * @return {string}
 */
QName.prototype.toString = function() {
  if (this.QName__uri)
    return this.QName__uri + "::" + this.QName__localName;
  return this.QName__localName;
};


QName.prototype.get__uri = function() {
  return this.QName__uri;
};


QName.prototype.set__uri = function(value) {
  this.QName__uri = value;
};


QName.prototype.get__localName = function() {
  return this.QName__localName;
};


QName.prototype.set__localName = function(value) {
  this.QName__localName = value;
};


QName.prototype.get__prefix = function() {
  return this.QName__prefix;
};


QName.prototype.set__prefix = function(value) {
  this.QName__prefix = value;
};


QName.prototype.get__isAttribute = function() {
  return this.QName__isAttribute;
};


QName.prototype.set__isAttribute = function(value) {
  this.QName__isAttribute = value;
};


Object.defineProperties(QName.prototype, /** @lends {QName.prototype} */ {
/**
  * @export
  * @type {string} */
uri: {
get: QName.prototype.get__uri,
set: QName.prototype.set__uri},
/**
  * @export
  * @type {string} */
localName: {
get: QName.prototype.get__localName,
set: QName.prototype.set__localName},
/**
  * @export
  * @type {string} */
prefix: {
get: QName.prototype.get__prefix,
set: QName.prototype.set__prefix},
/**
  * @export
  * @type {boolean} */
isAttribute: {
get: QName.prototype.get__isAttribute,
set: QName.prototype.set__isAttribute}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
QName.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'QName', qName: 'QName', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
QName.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'uri': { type: 'String', access: 'readwrite', declaredBy: 'QName'},
        'localName': { type: 'String', access: 'readwrite', declaredBy: 'QName'},
        'prefix': { type: 'String', access: 'readwrite', declaredBy: 'QName'},
        'isAttribute': { type: 'Boolean', access: 'readwrite', declaredBy: 'QName'}
      };
    },
    methods: function () {
      return {
        'QName': { type: '', declaredBy: 'QName', parameters: function () { return [ { index: 1, type: '*', optional: true },{ index: 2, type: '*', optional: true } ]; }},
        'objectAccessFormat': { type: 'String', declaredBy: 'QName'},
        'equals': { type: 'Boolean', declaredBy: 'QName', parameters: function () { return [ { index: 1, type: 'QName', optional: false } ]; }},
        'matches': { type: 'Boolean', declaredBy: 'QName', parameters: function () { return [ { index: 1, type: 'QName', optional: false } ]; }},
        'getNamespace': { type: 'Namespace', declaredBy: 'QName', parameters: function () { return [ { index: 1, type: 'Array', optional: true } ]; }},
        'toString': { type: 'String', declaredBy: 'QName'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
QName.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
