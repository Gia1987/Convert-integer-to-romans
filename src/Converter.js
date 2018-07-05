function Converter(){

}

Converter.prototype.convert = function(num){
  var res = ''
  while(num > 0){
    res += 'I'
    num --
  }
  return res;
}

module.exports = Converter;
