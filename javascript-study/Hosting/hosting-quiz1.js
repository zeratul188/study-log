function foo () {
    var a = 5;
  
    for (var i = 0; i < a; i++) {
      console.log(a);
    }
  
    console.log(i);  // 무엇이 출력될까요?
  }
  
  foo();