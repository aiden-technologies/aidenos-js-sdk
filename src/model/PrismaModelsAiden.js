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
import {PrismaModelsAidenStep} from './PrismaModelsAidenStep';
import {PrismaModelsUser} from './PrismaModelsUser';

/**
 * The PrismaModelsAiden model module.
 * @module model/PrismaModelsAiden
 * @version 0.0.5
 */
export class PrismaModelsAiden {
  /**
   * Constructs a new <code>PrismaModelsAiden</code>.
   * Represents a Aiden record
   * @alias module:model/PrismaModelsAiden
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param userId {String} 
   */
  constructor(id, name, createdAt, updatedAt, userId) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
  }

  /**
   * Constructs a <code>PrismaModelsAiden</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrismaModelsAiden} obj Optional instance to populate.
   * @return {module:model/PrismaModelsAiden} The populated <code>PrismaModelsAiden</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PrismaModelsAiden();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (data.hasOwnProperty('initialMessage'))
        obj.initialMessage = ApiClient.convertToType(data['initialMessage'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('steps'))
        obj.steps = ApiClient.convertToType(data['steps'], [PrismaModelsAidenStep]);
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = PrismaModelsUser.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
PrismaModelsAiden.prototype.id = undefined;

/**
 * @member {String} name
 */
PrismaModelsAiden.prototype.name = undefined;

/**
 * @member {String} description
 */
PrismaModelsAiden.prototype.description = undefined;

/**
 * @member {String} avatar
 */
PrismaModelsAiden.prototype.avatar = undefined;

/**
 * @member {String} initialMessage
 */
PrismaModelsAiden.prototype.initialMessage = undefined;

/**
 * @member {Date} createdAt
 */
PrismaModelsAiden.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PrismaModelsAiden.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/PrismaModelsAidenStep>} steps
 */
PrismaModelsAiden.prototype.steps = undefined;

/**
 * @member {String} userId
 */
PrismaModelsAiden.prototype.userId = undefined;

/**
 * @member {module:model/PrismaModelsUser} user
 */
PrismaModelsAiden.prototype.user = undefined;

