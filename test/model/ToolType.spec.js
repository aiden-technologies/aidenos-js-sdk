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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Askaiden);
  }
}(this, function(expect, Askaiden) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ToolType', function() {
      beforeEach(function() {
        instance = Askaiden.ToolType;
      });

      it('should create an instance of ToolType', function() {
        // TODO: update the code to test ToolType
        expect(instance).to.be.a('object');
      });

      it('should have the property BROWSER', function() {
        expect(instance).to.have.property('BROWSER');
        expect(instance.BROWSER).to.be("BROWSER");
      });

      it('should have the property BING_SEARCH', function() {
        expect(instance).to.have.property('BING_SEARCH');
        expect(instance.BING_SEARCH).to.be("BING_SEARCH");
      });

      it('should have the property REPLICATE', function() {
        expect(instance).to.have.property('REPLICATE');
        expect(instance.REPLICATE).to.be("REPLICATE");
      });

      it('should have the property WOLFRAM_ALPHA', function() {
        expect(instance).to.have.property('WOLFRAM_ALPHA');
        expect(instance.WOLFRAM_ALPHA).to.be("WOLFRAM_ALPHA");
      });

      it('should have the property ZAPIER_NLA', function() {
        expect(instance).to.have.property('ZAPIER_NLA');
        expect(instance.ZAPIER_NLA).to.be("ZAPIER_NLA");
      });

      it('should have the property SKILL', function() {
        expect(instance).to.have.property('SKILL');
        expect(instance.SKILL).to.be("SKILL");
      });

      it('should have the property OPENAPI', function() {
        expect(instance).to.have.property('OPENAPI');
        expect(instance.OPENAPI).to.be("OPENAPI");
      });

      it('should have the property CHATGPT_PLUGIN', function() {
        expect(instance).to.have.property('CHATGPT_PLUGIN');
        expect(instance.CHATGPT_PLUGIN).to.be("CHATGPT_PLUGIN");
      });

      it('should have the property METAPHOR', function() {
        expect(instance).to.have.property('METAPHOR');
        expect(instance.METAPHOR).to.be("METAPHOR");
      });

      it('should have the property PUBMED', function() {
        expect(instance).to.have.property('PUBMED');
        expect(instance.PUBMED).to.be("PUBMED");
      });

      it('should have the property CODE_EXECUTOR', function() {
        expect(instance).to.have.property('CODE_EXECUTOR');
        expect(instance.CODE_EXECUTOR).to.be("CODE_EXECUTOR");
      });

    });
  });

}));