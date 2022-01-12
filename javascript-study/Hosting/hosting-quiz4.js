function foo() {
    var a = 1;
  
    function bar () {
      a = 2;
    }
  
    console.log(a); // ?
    bar();
  }
  
  foo();