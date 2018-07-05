function Converter(){
  this.ROMANS = [
    {value: 9, numeral: 'IX'},
    {value: 5, numeral: 'V'},
    {value: 4, numeral: 'IV'},
    {value: 1, numeral: 'I'}
    ]
}

Converter.prototype.convert = function(num){
  var res = ''
  this.ROMANS.forEach(item =>{
    for(; num >= item.value; res += item.numeral){
      num -= item.value
    }
  })
  return res;
}

module.exports = Converter;
