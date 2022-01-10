//Boolean
const s = true;
const h = false;

console.log(s === h);

const o = new Boolean(true); //사용하지 말것!, X
const t = true; //O

console.log(o === t);

//Quiz 1 ***
const isTrue = true; // false -> true
if (isTrue) {
    console.log("Hi I can see you!");
}

//Quiz 2 ***
const isFalse = false; //new Boolean(false) -> false
if (isFalse) {
    console.log("Hi I can see you!");
}

//Quiz 3 ***
const myName = "ken";
const yourName = "ken22"; //ken -> ken이 아닌 다른 문자열

const isFalse2 = (myName === yourName);

if (isFalse2) {
    console.log("Name is equaled");
}