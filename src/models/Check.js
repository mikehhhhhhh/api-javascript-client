/**
 * Onfido API
 * The Onfido API is used to submit check requests.
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.Check = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Check model module.
   * @module models/Check
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>Check</code>.
   * @alias module:models/Check
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/Check} obj Optional instance to populate.
   * @return {module:models/Check} The populated <code>Check</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('download_uri')) {
        obj['download_uri'] = ApiClient.convertToType(data['download_uri'], 'String');
      }
      if (data.hasOwnProperty('form_uri')) {
        obj['form_uri'] = ApiClient.convertToType(data['form_uri'], 'String');
      }
      if (data.hasOwnProperty('redirect_uri')) {
        obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
      }
      if (data.hasOwnProperty('results_uri')) {
        obj['results_uri'] = ApiClient.convertToType(data['results_uri'], 'String');
      }
      if (data.hasOwnProperty('reports')) {
        obj['reports'] = ApiClient.convertToType(data['reports'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time when this check was created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The uri of this resource.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The type of the check: standard or express.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The current state of the check in the checking process.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * A list of tags associated with this check.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The overall result of the check, based on the results of the constituent reports.
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * @member {String} download_uri
   */
  exports.prototype['download_uri'] = undefined;
  /**
   * @member {String} form_uri
   */
  exports.prototype['form_uri'] = undefined;
  /**
   * @member {String} redirect_uri
   */
  exports.prototype['redirect_uri'] = undefined;
  /**
   * @member {String} results_uri
   */
  exports.prototype['results_uri'] = undefined;
  /**
   * @member {Array.<Object>} reports
   */
  exports.prototype['reports'] = undefined;



  return exports;
}));


