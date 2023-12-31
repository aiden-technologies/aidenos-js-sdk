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
 * The AppModelsResponseAiden model module.
 * @module model/AppModelsResponseAiden
 * @version 0.0.5
 */
export class AppModelsResponseAiden {
  /**
   * Constructs a new <code>AppModelsResponseAiden</code>.
   * @alias module:model/AppModelsResponseAiden
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>AppModelsResponseAiden</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppModelsResponseAiden} obj Optional instance to populate.
   * @return {module:model/AppModelsResponseAiden} The populated <code>AppModelsResponseAiden</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppModelsResponseAiden();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = PrismaModelsAiden.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
AppModelsResponseAiden.prototype.success = undefined;

/**
 * @member {module:model/PrismaModelsAiden} data
 */
AppModelsResponseAiden.prototype.data = undefined;

