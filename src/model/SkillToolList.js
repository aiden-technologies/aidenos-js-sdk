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
import {PrismaModelsSkillTool} from './PrismaModelsSkillTool';

/**
 * The SkillToolList model module.
 * @module model/SkillToolList
 * @version 0.0.5
 */
export class SkillToolList {
  /**
   * Constructs a new <code>SkillToolList</code>.
   * @alias module:model/SkillToolList
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>SkillToolList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkillToolList} obj Optional instance to populate.
   * @return {module:model/SkillToolList} The populated <code>SkillToolList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SkillToolList();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PrismaModelsSkillTool]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
SkillToolList.prototype.success = undefined;

/**
 * @member {Array.<module:model/PrismaModelsSkillTool>} data
 */
SkillToolList.prototype.data = undefined;

