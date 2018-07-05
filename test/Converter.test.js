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
  it('returns V for 5', function(){
    expect(converter.convert(5)).to.eql("V")
  });
  it('returns IX for 9', function(){
    expect(converter.convert(9)).to.eql("IX")
  });
  it('returns X for 10', function(){
    expect(converter.convert(10)).to.eql("X")
  });
  it('returns XL for 40', function(){
    expect(converter.convert(40)).to.eql("XL")
  });
  it('returns L for 50', function(){
    expect(converter.convert(50)).to.eql("L")
  });
  it('returns XC for 90', function(){
    expect(converter.convert(90)).to.eql("XC")
  });
  it('returns C for 100', function(){
    expect(converter.convert(100)).to.eql("C")
  });
});
