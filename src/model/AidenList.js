/*
 * askaiden
 * The operating system to build AI Tutors
 *
 * OpenAPI spec version: 0.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {PrismaModelsAiden} from './PrismaModelsAiden';

/**
 * The AidenList model module.
 * @module model/AidenList
 * @version 0.0.5
 */
export class AidenList {
  /**
   * Constructs a new <code>AidenList</code>.
   * @alias module:model/AidenList
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>AidenList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AidenList} obj Optional instance to populate.
   * @return {module:model/AidenList} The populated <code>AidenList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AidenList();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PrismaModelsAiden]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
AidenList.prototype.success = undefined;

/**
 * @member {Array.<module:model/PrismaModelsAiden>} data
 */
AidenList.prototype.data = undefined;

