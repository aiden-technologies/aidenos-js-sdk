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
 * The AppModelsRequestDatasource model module.
 * @module model/AppModelsRequestDatasource
 * @version 0.0.5
 */
export class AppModelsRequestDatasource {
  /**
   * Constructs a new <code>AppModelsRequestDatasource</code>.
   * @alias module:model/AppModelsRequestDatasource
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
   * Constructs a <code>AppModelsRequestDatasource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppModelsRequestDatasource} obj Optional instance to populate.
   * @return {module:model/AppModelsRequestDatasource} The populated <code>AppModelsRequestDatasource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppModelsRequestDatasource();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
AppModelsRequestDatasource.prototype.name = undefined;

/**
 * @member {String} description
 */
AppModelsRequestDatasource.prototype.description = undefined;

/**
 * @member {String} type
 */
AppModelsRequestDatasource.prototype.type = undefined;

/**
 * @member {String} content
 */
AppModelsRequestDatasource.prototype.content = undefined;

/**
 * @member {String} url
 */
AppModelsRequestDatasource.prototype.url = undefined;

/**
 * @member {Object} metadata
 */
AppModelsRequestDatasource.prototype.metadata = undefined;

