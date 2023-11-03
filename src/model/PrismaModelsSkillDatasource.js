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
import {PrismaModelsDatasource} from './PrismaModelsDatasource';
import {PrismaModelsSkill} from './PrismaModelsSkill';

/**
 * The PrismaModelsSkillDatasource model module.
 * @module model/PrismaModelsSkillDatasource
 * @version 0.0.5
 */
export class PrismaModelsSkillDatasource {
  /**
   * Constructs a new <code>PrismaModelsSkillDatasource</code>.
   * Represents a SkillDatasource record
   * @alias module:model/PrismaModelsSkillDatasource
   * @class
   * @param skillId {String} 
   * @param datasourceId {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   */
  constructor(skillId, datasourceId, createdAt, updatedAt) {
    this.skillId = skillId;
    this.datasourceId = datasourceId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * Constructs a <code>PrismaModelsSkillDatasource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrismaModelsSkillDatasource} obj Optional instance to populate.
   * @return {module:model/PrismaModelsSkillDatasource} The populated <code>PrismaModelsSkillDatasource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PrismaModelsSkillDatasource();
      if (data.hasOwnProperty('skillId'))
        obj.skillId = ApiClient.convertToType(data['skillId'], 'String');
      if (data.hasOwnProperty('datasourceId'))
        obj.datasourceId = ApiClient.convertToType(data['datasourceId'], 'String');
      if (data.hasOwnProperty('skill'))
        obj.skill = PrismaModelsSkill.constructFromObject(data['skill']);
      if (data.hasOwnProperty('datasource'))
        obj.datasource = PrismaModelsDatasource.constructFromObject(data['datasource']);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} skillId
 */
PrismaModelsSkillDatasource.prototype.skillId = undefined;

/**
 * @member {String} datasourceId
 */
PrismaModelsSkillDatasource.prototype.datasourceId = undefined;

/**
 * @member {module:model/PrismaModelsSkill} skill
 */
PrismaModelsSkillDatasource.prototype.skill = undefined;

/**
 * @member {module:model/PrismaModelsDatasource} datasource
 */
PrismaModelsSkillDatasource.prototype.datasource = undefined;

/**
 * @member {Date} createdAt
 */
PrismaModelsSkillDatasource.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PrismaModelsSkillDatasource.prototype.updatedAt = undefined;
