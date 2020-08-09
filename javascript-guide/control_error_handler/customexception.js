function doSomething() {
  throw (new Error('My message'));
}

try {
  doSomething();
} catch(e) {
  console.error(e.name);
  console.error(e.message);
} 