var expect = require('chai').expect;
var mocha = require('mocha');
var Converter = require('../src/Converter');

describe('Converter', function(){
  var converter = new Converter()
  it('returns I for 1', function(){
    expect(converter.convert(1)).to.eql("I")
  });
  it('returns II for 2', function(){
    expect(converter.convert(2)).to.eql("II")
  });
  it('returns III for 3', function(){
    expect(converter.convert(3)).to.eql("III")
  });
  it('returns IV for 4', function(){
    expect(converter.convert(4)).to.eql("IV")
  });
});
