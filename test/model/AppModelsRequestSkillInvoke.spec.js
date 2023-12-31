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
    describe('AppModelsRequestSkillInvoke', function() {
      beforeEach(function() {
        instance = new Askaiden.AppModelsRequestSkillInvoke();
      });

      it('should create an instance of AppModelsRequestSkillInvoke', function() {
        // TODO: update the code to test AppModelsRequestSkillInvoke
        expect(instance).to.be.a(Askaiden.AppModelsRequestSkillInvoke);
      });

      it('should have the property input (base name: "input")', function() {
        // TODO: update the code to test the property input
        expect(instance).to.have.property('input');
        // expect(instance.input).to.be(expectedValueLiteral);
      });

      it('should have the property sessionId (base name: "sessionId")', function() {
        // TODO: update the code to test the property sessionId
        expect(instance).to.have.property('sessionId');
        // expect(instance.sessionId).to.be(expectedValueLiteral);
      });

      it('should have the property enableStreaming (base name: "enableStreaming")', function() {
        // TODO: update the code to test the property enableStreaming
        expect(instance).to.have.property('enableStreaming');
        // expect(instance.enableStreaming).to.be(expectedValueLiteral);
      });

      it('should have the property outputSchema (base name: "outputSchema")', function() {
        // TODO: update the code to test the property outputSchema
        expect(instance).to.have.property('outputSchema');
        // expect(instance.outputSchema).to.be(expectedValueLiteral);
      });

    });
  });

}));
