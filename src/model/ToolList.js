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
import {PrismaModelsTool} from './PrismaModelsTool';

/**
 * The ToolList model module.
 * @module model/ToolList
 * @version 0.0.5
 */
export class ToolList {
  /**
   * Constructs a new <code>ToolList</code>.
   * @alias module:model/ToolList
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>ToolList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ToolList} obj Optional instance to populate.
   * @return {module:model/ToolList} The populated <code>ToolList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ToolList();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PrismaModelsTool]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
ToolList.prototype.success = undefined;

/**
 * @member {Array.<module:model/PrismaModelsTool>} data
 */
ToolList.prototype.data = undefined;
