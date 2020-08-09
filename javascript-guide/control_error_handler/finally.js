function f() {
  try {
    console.log(1);
    throw 'bug';
  } catch(e) {
    console.log(2);
    return true;
    console.log(3);
  } finally {
    console.log(4);
    return false;
  }
  console.log(5);
}
console.log(f());