function Converter(){

}

Converter.prototype.convert = function(num){
  if(num === 2){
    return 'II'
  }else if (num === 3) {
    return 'III'
  }
  return 'I'
}

module.exports = Converter;
// var romans = new Romans()
// romans.convertToRomans(2648)
