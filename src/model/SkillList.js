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
import {PrismaModelsSkill} from './PrismaModelsSkill';

/**
 * The SkillList model module.
 * @module model/SkillList
 * @version 0.0.5
 */
export class SkillList {
  /**
   * Constructs a new <code>SkillList</code>.
   * @alias module:model/SkillList
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>SkillList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkillList} obj Optional instance to populate.
   * @return {module:model/SkillList} The populated <code>SkillList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SkillList();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PrismaModelsSkill]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
SkillList.prototype.success = undefined;

/**
 * @member {Array.<module:model/PrismaModelsSkill>} data
 */
SkillList.prototype.data = undefined;

