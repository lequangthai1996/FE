var a = ['Hi', 'Hello', 'Job', 'Prediction'];
var a2 = a.map(function(s) { return s.length});
console.log(a2);

var a3 = a.map(s => s.length);
console.log(a3);

function Person() {
  this.age = 0;
  function setAge() {
    () => {
    this.age++;
   }
  }
  function getAGe() {
    () => {
    return this.age;
    }
  }
}

var p = new Person();
p.setAge();
console.log(p.getAGe());