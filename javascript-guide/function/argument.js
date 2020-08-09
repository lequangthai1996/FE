function myConcat() {
  var result = '';
  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i] + ',';
  }
  return result;
}

var x =  myConcat('hh', 'red', 'orange', 'blue' );
console.log(x);

function multiply(a, b = 2) {
  return a*b;
}

var product = multiply(5);
console.log(product);

function multiply2(multiplier, ...theArgs) {
  return theArgs.map(x => x * multiplier);
}

var arr = multiply2(2, 1, 2, 3);
console.log(arr);