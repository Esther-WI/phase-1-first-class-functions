function receivesAFunction(callBack) {
  callBack();
}

function returnsANamedFunction() {
    return function namedFunction() {
      console.log('Hello');
    }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('Hello');
  }
}