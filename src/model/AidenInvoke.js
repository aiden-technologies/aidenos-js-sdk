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
 * The AidenInvoke model module.
 * @module model/AidenInvoke
 * @version 0.0.5
 */
export class AidenInvoke {
  /**
   * Constructs a new <code>AidenInvoke</code>.
   * @alias module:model/AidenInvoke
   * @class
   * @param input {String} 
   * @param conversationId {String} 
   * @param enableStreaming {Boolean} 
   */
  constructor(input, conversationId, enableStreaming) {
    this.input = input;
    this.conversationId = conversationId;
    this.enableStreaming = enableStreaming;
  }

  /**
   * Constructs a <code>AidenInvoke</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AidenInvoke} obj Optional instance to populate.
   * @return {module:model/AidenInvoke} The populated <code>AidenInvoke</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AidenInvoke();
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], 'String');
      if (data.hasOwnProperty('conversationId'))
        obj.conversationId = ApiClient.convertToType(data['conversationId'], 'String');
      if (data.hasOwnProperty('enableStreaming'))
        obj.enableStreaming = ApiClient.convertToType(data['enableStreaming'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} input
 */
AidenInvoke.prototype.input = undefined;

/**
 * @member {String} conversationId
 */
AidenInvoke.prototype.conversationId = undefined;

/**
 * @member {Boolean} enableStreaming
 */
AidenInvoke.prototype.enableStreaming = undefined;
