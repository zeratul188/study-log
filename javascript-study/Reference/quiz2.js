let one = { name: "one" };
const two = { name: "two" };

const something = one;

one = { name: "ONE" };

console.log(something); // ?