/**
 * ScrumBoard-it
 * ScrumBoard-it API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: team@scrumboard-it.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    factory(root.expect, root.ScrumBoardIt);
  }
}(this, function(expect, ScrumBoardIt) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ScrumBoardIt.InlineResponse2004();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2004', function() {
    it('should create an instance of InlineResponse2004', function() {
      // uncomment below and update the code to test InlineResponse2004
      //var instane = new ScrumBoardIt.InlineResponse2004();
      //expect(instance).to.be.a(ScrumBoardIt.InlineResponse2004);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new ScrumBoardIt.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ScrumBoardIt.InlineResponse2004();
      //expect(instance).to.be();
    });

  });

}));
