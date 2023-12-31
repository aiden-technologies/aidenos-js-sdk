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

/**
 * The AppModelsRequestSkill model module.
 * @module model/AppModelsRequestSkill
 * @version 0.0.5
 */
export class AppModelsRequestSkill {
  /**
   * Constructs a new <code>AppModelsRequestSkill</code>.
   * @alias module:model/AppModelsRequestSkill
   * @class
   * @param name {String} 
   * @param description {String} 
   */
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  /**
   * Constructs a <code>AppModelsRequestSkill</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppModelsRequestSkill} obj Optional instance to populate.
   * @return {module:model/AppModelsRequestSkill} The populated <code>AppModelsRequestSkill</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppModelsRequestSkill();
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('prompt'))
        obj.prompt = ApiClient.convertToType(data['prompt'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} isActive
 * @default true
 */
AppModelsRequestSkill.prototype.isActive = true;

/**
 * @member {String} name
 */
AppModelsRequestSkill.prototype.name = undefined;

/**
 * @member {String} prompt
 */
AppModelsRequestSkill.prototype.prompt = undefined;

/**
 * @member {String} description
 */
AppModelsRequestSkill.prototype.description = undefined;

/**
 * @member {String} avatar
 */
AppModelsRequestSkill.prototype.avatar = undefined;

