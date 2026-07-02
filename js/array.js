let array = new Array(3);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2, 3, 4, 5);
console.log(array);

// 일반적으로 쓰는 방식
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

// 자바스크립트의 배열은 오브젝트와 유사함 (연속적으로 이어져 있지 않음)
// 보완을 위해, 타입이 정해져 있는 타입 배열이 존재
array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array);

const fruits = ["banana", "apple", "grape", "peach"];
console.log(fruits[0]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits2 = ["banana", "apple", "lemon"];

console.log(Array.isArray(fruits2));
console.log(fruits2.indexOf("apple"));
console.log(fruits2.includes("banana"));
// 추가: 제일 앞
let length = fruits2.push("watermelon");
console.log(fruits2);
console.log(length);
// 추가: 제일 뒤
length = fruits2.unshift("melon");
console.log(fruits2);
console.log(length);
// 제거: 제일 뒤
let lastItem = fruits2.pop();
console.log(fruits2);
console.log(lastItem);
// 제거: 제일 앞
lastItem = fruits2.shift();
console.log(fruits2);
console.log(lastItem);
// 중간 추가 또는 삭제
const deleted = fruits2.splice(1, 1);
console.log(fruits2);
console.log(deleted);
fruits2.splice(1, 0, "apple", "melon");
console.log(fruits2);

// 잘라진 새로운 배열을 만드는 API
let newArr = fruits2.slice(0, 2);
console.log(newArr);
console.log(fruits2);

// 배열 퀴즈 1.
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const array = ["banana", "melon", "grape", "melon"];
const result = replace(array, "melon", "kiwi");
console.log(result);

// 2.
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
const result2 = count(array, "kiwi");
console.log(result2);
