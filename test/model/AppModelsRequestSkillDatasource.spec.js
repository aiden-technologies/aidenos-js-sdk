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
    describe('AppModelsRequestSkillDatasource', function() {
      beforeEach(function() {
        instance = new Askaiden.AppModelsRequestSkillDatasource();
      });

      it('should create an instance of AppModelsRequestSkillDatasource', function() {
        // TODO: update the code to test AppModelsRequestSkillDatasource
        expect(instance).to.be.a(Askaiden.AppModelsRequestSkillDatasource);
      });

      it('should have the property datasourceId (base name: "datasourceId")', function() {
        // TODO: update the code to test the property datasourceId
        expect(instance).to.have.property('datasourceId');
        // expect(instance.datasourceId).to.be(expectedValueLiteral);
      });

    });
  });

}));
