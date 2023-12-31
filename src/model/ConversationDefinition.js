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
 * The ConversationDefinition model module.
 * @module model/ConversationDefinition
 * @version 0.0.5
 */
export class ConversationDefinition {
  /**
   * Constructs a new <code>ConversationDefinition</code>.
   * @alias module:model/ConversationDefinition
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>ConversationDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConversationDefinition} obj Optional instance to populate.
   * @return {module:model/ConversationDefinition} The populated <code>ConversationDefinition</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConversationDefinition();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
ConversationDefinition.prototype.name = undefined;

/**
 * @member {Object} metadata
 */
ConversationDefinition.prototype.metadata = undefined;

