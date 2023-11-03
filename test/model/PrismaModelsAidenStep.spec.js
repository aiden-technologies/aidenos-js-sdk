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
    describe('PrismaModelsAidenStep', function() {
      beforeEach(function() {
        instance = new Askaiden.PrismaModelsAidenStep();
      });

      it('should create an instance of PrismaModelsAidenStep', function() {
        // TODO: update the code to test PrismaModelsAidenStep
        expect(instance).to.be.a(Askaiden.PrismaModelsAidenStep);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property order (base name: "order")', function() {
        // TODO: update the code to test the property order
        expect(instance).to.have.property('order');
        // expect(instance.order).to.be(expectedValueLiteral);
      });

      it('should have the property aidenId (base name: "aidenId")', function() {
        // TODO: update the code to test the property aidenId
        expect(instance).to.have.property('aidenId');
        // expect(instance.aidenId).to.be(expectedValueLiteral);
      });

      it('should have the property aiden (base name: "aiden")', function() {
        // TODO: update the code to test the property aiden
        expect(instance).to.have.property('aiden');
        // expect(instance.aiden).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property input (base name: "input")', function() {
        // TODO: update the code to test the property input
        expect(instance).to.have.property('input');
        // expect(instance.input).to.be(expectedValueLiteral);
      });

      it('should have the property output (base name: "output")', function() {
        // TODO: update the code to test the property output
        expect(instance).to.have.property('output');
        // expect(instance.output).to.be(expectedValueLiteral);
      });

      it('should have the property skillId (base name: "skillId")', function() {
        // TODO: update the code to test the property skillId
        expect(instance).to.have.property('skillId');
        // expect(instance.skillId).to.be(expectedValueLiteral);
      });

      it('should have the property skill (base name: "skill")', function() {
        // TODO: update the code to test the property skill
        expect(instance).to.have.property('skill');
        // expect(instance.skill).to.be(expectedValueLiteral);
      });

    });
  });

}));