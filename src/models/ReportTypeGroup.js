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
    define(['ApiClient', 'models/ReportType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportType'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportTypeGroup = factory(root.Onfido.ApiClient, root.Onfido.ReportType);
  }
}(this, function(ApiClient, ReportType) {
  'use strict';




  /**
   * The ReportTypeGroup model module.
   * @module models/ReportTypeGroup
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ReportTypeGroup</code>.
   * @alias module:models/ReportTypeGroup
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ReportTypeGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ReportTypeGroup} obj Optional instance to populate.
   * @return {module:models/ReportTypeGroup} The populated <code>ReportTypeGroup</code> instance.
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
      if (data.hasOwnProperty('group_only')) {
        obj['group_only'] = ApiClient.convertToType(data['group_only'], 'Boolean');
      }
      if (data.hasOwnProperty('report_types')) {
        obj['report_types'] = ApiClient.convertToType(data['report_types'], [ReportType]);
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
   * @member {Boolean} group_only
   */
  exports.prototype['group_only'] = undefined;
  /**
   * @member {Array.<module:models/ReportType>} report_types
   */
  exports.prototype['report_types'] = undefined;



  return exports;
}));


