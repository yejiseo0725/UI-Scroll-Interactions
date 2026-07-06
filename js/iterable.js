// 이터러블 하다 = 순회가 가능하다!
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const item of multiple) {
  console.log(item);
}

// Generator
function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    yield i ** 2;
  }
}
const multiple2 = multipleGenerator();
let next = multiple2.next();
console.log(next.value, next.done);

// Spread
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Object
const ellie = { name: "Ellie", age: 20 };
const updated = {
  ...ellie,
  job: "s/w engineer",
};
console.log(ellie);
console.log(updated);
