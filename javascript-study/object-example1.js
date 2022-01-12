var person = {
    name: "Ken Huh",
    age: 13,
    address: "서울특별시 강남구"
};

console.log("Name : "+person.name+"\nAge : "+person.age+"\nAddress : "+person.address);

delete person.age;


console.log("Name : "+person.name+"\nAge : "+person.age+"\nAddress : "+person.address);

const sample = {
    one: 1,
    two: 2,
    three: 3
};

for (let prop in sample) {
    console.log(prop);
    console.log(sample[prop]);
}
/*
one
1
two
2
three
3
*/

function setAge() {
    return 30;
}

const new_person = {
    name : "Ken Huh",
    age: setAge()
}

console.log("Name : "+new_person.name+"\nAge : "+new_person.age);

function foo(x, y) {
    return x + y + 3;
}

console.log(foo.title);
console.log(foo(2, 3));

foo.title = 'Mixroid';

console.log(foo.title);
console.log(foo(2, 3));


function foo (a) {
    return a + 3;
  }
  
  const arr = [ foo(1), foo(2), foo(3) ];
  
  console.log(arr);