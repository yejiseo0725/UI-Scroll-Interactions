let lastName = "Seo";
let firstName = "Yeji";
console.log(fullName(firstName, lastName));

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Rest Parameters
function nums(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
nums(1, 2, 3, 4, 5, 6, 7, 8);

// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
let sum = function (a, b) {
  return a + b;
};
console.log(sum(3, 4));

// 화살표 함수 const name = () => {}
sum = (a, b) => a + b;
console.log(sum(5, 6));

// 생성자 함수 const object = new function () {}

// IIFE (Immedicately-Invoked Function Expressions)
(funtion return() {
    console.log('Hello');
})();

// 콜백 함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action 은 콜백 함수이다.
// 전달 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 나중에 호출이 됨.
function calculator(a, b, action) {

    if (a < 0 || b < 0) {
        return;
    }

    let result = action(a, b);
    console.log(result);
    return result;
}

// 이 때 어떤 함수 인자일지 결정하는 것!
calculator(1, 2, add);
calculator(3, 4, multiply);
calculator(-1, -2, add);
