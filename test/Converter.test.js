var expect = require('chai').expect;
var mocha = require('mocha');
var Converter = require('../src/Converter');

describe('Converter', function(){
  var converter = new Converter()
  it('returns I for 1', function(){
    expect(converter.convert(1)).to.eql("I")
  });
});
