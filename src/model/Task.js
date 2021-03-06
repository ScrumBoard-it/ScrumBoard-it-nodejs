/**
 * ScrumBoard-it
 * ScrumBoard-it API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: team@scrumboard-it.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ScrumBoardIt) {
      root.ScrumBoardIt = {};
    }
    root.ScrumBoardIt.Task = factory(root.ScrumBoardIt.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Task model module.
   * @module model/Task
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   * @class
   * @param id {String} 
   * @param description {String} 
   */
  var exports = function(id, description) {
    var _this = this;

    _this['id'] = id;





    _this['description'] = description;
  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('estimation')) {
        obj['estimation'] = ApiClient.convertToType(data['estimation'], 'Number');
      }
      if (data.hasOwnProperty('roi')) {
        obj['roi'] = ApiClient.convertToType(data['roi'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Number} estimation
   */
  exports.prototype['estimation'] = undefined;
  /**
   * Return On Investment
   * @member {Number} roi
   */
  exports.prototype['roi'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


