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
    define(['ApiClient', 'models/Applicant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Applicant'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ApplicantsList = factory(root.Onfido.ApiClient, root.Onfido.Applicant);
  }
}(this, function(ApiClient, Applicant) {
  'use strict';




  /**
   * The ApplicantsList model module.
   * @module models/ApplicantsList
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ApplicantsList</code>.
   * @alias module:models/ApplicantsList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApplicantsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ApplicantsList} obj Optional instance to populate.
   * @return {module:models/ApplicantsList} The populated <code>ApplicantsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicants')) {
        obj['applicants'] = ApiClient.convertToType(data['applicants'], [Applicant]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:models/Applicant>} applicants
   */
  exports.prototype['applicants'] = undefined;



  return exports;
}));


