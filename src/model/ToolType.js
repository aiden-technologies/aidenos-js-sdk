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
 * Enum class ToolType.
 * @enum {String}
 * @readonly
 */
const ToolType = {
  /**
   * value: "BROWSER"
   * @const
   */
  BROWSER: "BROWSER",

  /**
   * value: "BING_SEARCH"
   * @const
   */
  BING_SEARCH: "BING_SEARCH",

  /**
   * value: "REPLICATE"
   * @const
   */
  REPLICATE: "REPLICATE",

  /**
   * value: "WOLFRAM_ALPHA"
   * @const
   */
  WOLFRAM_ALPHA: "WOLFRAM_ALPHA",

  /**
   * value: "ZAPIER_NLA"
   * @const
   */
  ZAPIER_NLA: "ZAPIER_NLA",

  /**
   * value: "SKILL"
   * @const
   */
  SKILL: "SKILL",

  /**
   * value: "OPENAPI"
   * @const
   */
  OPENAPI: "OPENAPI",

  /**
   * value: "CHATGPT_PLUGIN"
   * @const
   */
  CHATGPT_PLUGIN: "CHATGPT_PLUGIN",

  /**
   * value: "METAPHOR"
   * @const
   */
  METAPHOR: "METAPHOR",

  /**
   * value: "PUBMED"
   * @const
   */
  PUBMED: "PUBMED",

  /**
   * value: "CODE_EXECUTOR"
   * @const
   */
  CODE_EXECUTOR: "CODE_EXECUTOR",

  /**
   * Returns a <code>ToolType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/ToolType} The enum <code>ToolType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ToolType};