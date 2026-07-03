const fruits = ["banana", "strawberry", "grape", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 고차함수 ver.
fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value));

// 조건에 맞는 콜백함수 아이템 찾을 때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "milk", price: 2 };
const item2 = { name: "cookie", price: 3 };
const item3 = { name: "gimbap", price: 1 };
const products = [item1, item2, item3, item2];
let found = products.find((value) => value.name === "cookie");
console.log(found);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
found = products.findIndex((value) => value.name === "cookie");
console.log(found);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
found = products.some((item) => item.name === "cookie");
console.log(found);

// 전부 조건에 맞는지 확인
found = products.every((item) => item.name === "cookie");
console.log(found);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
found = products.filter((item) => item.name === "cookie");
console.log(found);

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
let result = nums.map((item) => item * 2);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dreaming", "yeji"].flatMap((text) => text.split(""));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const num = [0, 5, 4, 2, 1, 10];
num.sort();
console.log(num);
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
num.sort((a, b) => a - b);
console.log(num);

// reduce 배열의 요소들을 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);

// hof 퀴즈 1.
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
const array = ["banana", "melon", "grape", "melon"];
const result = replace(array, "melon", "kiwi");
console.log(result);

// 2.
function count(array, item) {
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0);
}
console.log(count(array, "kiwi"));

// 3.
const arr1 = ["banana", "kiwi", "grape"];
const arr2 = ["banana", "strawberry", "grape", "strawberry"];

function match(input, search) {
  return input.filter((item) => search.includes(item));
}

console.log(match(arr1, arr2));

// 4. 5초과 숫자들의 평균 만들기
const nums = [3, 16, 5, 25, 4, 34, 21];

function averageNums(numbers) {
  const filtered = numbers.filter((n) => n > 5);
  return filtered.sort((a, b) => a - b);
}
let overFiveResult = averageNums(nums);
console.log(overFiveResult);

let aveResult = overFiveResult.reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(aveResult / overFiveResult.length);
