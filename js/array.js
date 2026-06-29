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
