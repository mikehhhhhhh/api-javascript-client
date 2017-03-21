/**
 * Onfido API
 * The Onfido API is used to submit background checking requests
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'models/ReportTypeOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportTypeOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportType = factory(root.Onfido.ApiClient, root.Onfido.ReportTypeOption);
  }
}(this, function(ApiClient, ReportTypeOption) {
  'use strict';




  /**
   * The ReportType model module.
   * @module models/ReportType
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ReportType</code>.
   * @alias module:models/ReportType
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ReportType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ReportType} obj Optional instance to populate.
   * @return {module:models/ReportType} The populated <code>ReportType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [ReportTypeOption]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} variant
   */
  exports.prototype['variant'] = undefined;
  /**
   * @member {Array.<module:models/ReportTypeOption>} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));

