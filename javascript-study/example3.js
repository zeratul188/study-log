const nothing1 = null;
console.log(nothing1 === null);

const nothing2 = undefined;
console.log(nothing2 === undefined);

console.log(nothing2 === nothing1);

/*
undefined라는 단어의 의미는 말 그대로, "정의되지 않음"이라는 뜻입니다.
예를 들면, 우리가 어떤 변수를 만들고 그 값을 정의해주지 않았을때 사용되곤 합니다.
값이 대입되지 않은 상태를 위해 많이 사용됩니다.

null 값은 undefined와 다르게 의도적으로 값이 없을을 표현할 때 사용합니다.
*/

let k;
console.log(k);

let o = undefined;
console.log(o);

let title = "Bootcamp";
console.log(title);
title = null;
console.log(title);