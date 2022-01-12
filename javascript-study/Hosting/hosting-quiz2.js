var a = 1;

function bar () {

  function foo() {
    console.log(a);  // ?
  }

  foo();
}

bar();