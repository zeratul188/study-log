var a = 1;

function bar () {

  function foo() {
    console.log(a);  // ?
  }
  
  a = 2;

  foo();
}

bar();