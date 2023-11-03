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
import {PrismaModelsSkillDatasource} from './PrismaModelsSkillDatasource';

/**
 * The SkillDatasosurceList model module.
 * @module model/SkillDatasosurceList
 * @version 0.0.5
 */
export class SkillDatasosurceList {
  /**
   * Constructs a new <code>SkillDatasosurceList</code>.
   * @alias module:model/SkillDatasosurceList
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>SkillDatasosurceList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkillDatasosurceList} obj Optional instance to populate.
   * @return {module:model/SkillDatasosurceList} The populated <code>SkillDatasosurceList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SkillDatasosurceList();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [PrismaModelsSkillDatasource]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
SkillDatasosurceList.prototype.success = undefined;

/**
 * @member {Array.<module:model/PrismaModelsSkillDatasource>} data
 */
SkillDatasosurceList.prototype.data = undefined;
