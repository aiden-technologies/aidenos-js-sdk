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
    describe('PrismaModelsAiden', function() {
      beforeEach(function() {
        instance = new Askaiden.PrismaModelsAiden();
      });

      it('should create an instance of PrismaModelsAiden', function() {
        // TODO: update the code to test PrismaModelsAiden
        expect(instance).to.be.a(Askaiden.PrismaModelsAiden);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property avatar (base name: "avatar")', function() {
        // TODO: update the code to test the property avatar
        expect(instance).to.have.property('avatar');
        // expect(instance.avatar).to.be(expectedValueLiteral);
      });

      it('should have the property initialMessage (base name: "initialMessage")', function() {
        // TODO: update the code to test the property initialMessage
        expect(instance).to.have.property('initialMessage');
        // expect(instance.initialMessage).to.be(expectedValueLiteral);
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

      it('should have the property steps (base name: "steps")', function() {
        // TODO: update the code to test the property steps
        expect(instance).to.have.property('steps');
        // expect(instance.steps).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
