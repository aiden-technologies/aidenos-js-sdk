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
 * The AppModelsRequestTool model module.
 * @module model/AppModelsRequestTool
 * @version 0.0.5
 */
export class AppModelsRequestTool {
  /**
   * Constructs a new <code>AppModelsRequestTool</code>.
   * @alias module:model/AppModelsRequestTool
   * @class
   * @param name {String} 
   * @param description {String} 
   * @param type {String} 
   */
  constructor(name, description, type) {
    this.name = name;
    this.description = description;
    this.type = type;
  }

  /**
   * Constructs a <code>AppModelsRequestTool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppModelsRequestTool} obj Optional instance to populate.
   * @return {module:model/AppModelsRequestTool} The populated <code>AppModelsRequestTool</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppModelsRequestTool();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
      if (data.hasOwnProperty('returnDirect'))
        obj.returnDirect = ApiClient.convertToType(data['returnDirect'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
AppModelsRequestTool.prototype.name = undefined;

/**
 * @member {String} description
 */
AppModelsRequestTool.prototype.description = undefined;

/**
 * @member {String} type
 */
AppModelsRequestTool.prototype.type = undefined;

/**
 * @member {Object} metadata
 */
AppModelsRequestTool.prototype.metadata = undefined;

/**
 * @member {Boolean} returnDirect
 */
AppModelsRequestTool.prototype.returnDirect = undefined;

