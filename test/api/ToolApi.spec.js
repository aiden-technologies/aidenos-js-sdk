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
    instance = new Askaiden.ToolApi();
  });

  describe('(package)', function() {
    describe('ToolApi', function() {
      describe('createTools', function() {
        it('should call createTools successfully', function(done) {
          // TODO: uncomment, update parameter values for createTools call and complete the assertions
          /*

          instance.createTools(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Askaiden.AppModelsResponseTool);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteTool', function() {
        it('should call deleteTool successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteTool call and complete the assertions
          /*

          instance.deleteTool(toolId, function(error, data, response) {
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
      describe('getApiV1ToolsToolIdGet', function() {
        it('should call getApiV1ToolsToolIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getApiV1ToolsToolIdGet call and complete the assertions
          /*

          instance.getApiV1ToolsToolIdGet(toolId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Askaiden.AppModelsResponseTool);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listTools', function() {
        it('should call listTools successfully', function(done) {
          // TODO: uncomment listTools call and complete the assertions
          /*

          instance.listTools(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Askaiden.ToolList);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateApiV1ToolsToolIdPatch', function() {
        it('should call updateApiV1ToolsToolIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for updateApiV1ToolsToolIdPatch call and complete the assertions
          /*

          instance.updateApiV1ToolsToolIdPatch(body, toolId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Askaiden.AppModelsResponseTool);

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
