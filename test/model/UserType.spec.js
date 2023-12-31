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
    describe('UserType', function() {
      beforeEach(function() {
        instance = Askaiden.UserType;
      });

      it('should create an instance of UserType', function() {
        // TODO: update the code to test UserType
        expect(instance).to.be.a('object');
      });

      it('should have the property LEARNER', function() {
        expect(instance).to.have.property('LEARNER');
        expect(instance.LEARNER).to.be("LEARNER");
      });

      it('should have the property EDUCATOR', function() {
        expect(instance).to.have.property('EDUCATOR');
        expect(instance.EDUCATOR).to.be("EDUCATOR");
      });

      it('should have the property PROFESSIONAL', function() {
        expect(instance).to.have.property('PROFESSIONAL');
        expect(instance.PROFESSIONAL).to.be("PROFESSIONAL");
      });

    });
  });

}));
