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

  beforeEach(function() {
    instance = new Askaiden.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('createApiV1UserPost', function() {
        it('should call createApiV1UserPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createApiV1UserPost call and complete the assertions
          /*

          instance.createApiV1UserPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteApiV1UserDelete', function() {
        it('should call deleteApiV1UserDelete successfully', function(done) {
          // TODO: uncomment deleteApiV1UserDelete call and complete the assertions
          /*

          instance.deleteApiV1UserDelete(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getApiV1UserGet', function() {
        it('should call getApiV1UserGet successfully', function(done) {
          // TODO: uncomment getApiV1UserGet call and complete the assertions
          /*

          instance.getApiV1UserGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Askaiden.AppModelsRequestUser);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateApiV1UserPatch', function() {
        it('should call updateApiV1UserPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for updateApiV1UserPatch call and complete the assertions
          /*

          instance.updateApiV1UserPatch(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Askaiden.AppModelsResponseUser);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));