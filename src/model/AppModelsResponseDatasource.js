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

/**
 * The AppModelsResponseDatasource model module.
 * @module model/AppModelsResponseDatasource
 * @version 0.0.5
 */
export class AppModelsResponseDatasource {
  /**
   * Constructs a new <code>AppModelsResponseDatasource</code>.
   * @alias module:model/AppModelsResponseDatasource
   * @class
   * @param success {Boolean} 
   */
  constructor(success) {
    this.success = success;
  }

  /**
   * Constructs a <code>AppModelsResponseDatasource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppModelsResponseDatasource} obj Optional instance to populate.
   * @return {module:model/AppModelsResponseDatasource} The populated <code>AppModelsResponseDatasource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppModelsResponseDatasource();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('data'))
        obj.data = PrismaModelsDatasource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
AppModelsResponseDatasource.prototype.success = undefined;

/**
 * @member {module:model/PrismaModelsDatasource} data
 */
AppModelsResponseDatasource.prototype.data = undefined;

