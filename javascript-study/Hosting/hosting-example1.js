var a = 1;

function foo () {
  console.log(a);
  var a = 2;
}

foo();

/*
아래는 호스팅 적용 순서
*/
var b = 1;

function fuu() {
    var b;
    console.log(b);
    b = 2;
}

fuu();