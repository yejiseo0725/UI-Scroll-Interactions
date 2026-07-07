// 논리 연산자 Logical Operator
// 단축 평가
const obj1 = { name: "puppy" };
const obj2 = { name: "kitten", owner: "Ellie" };

if (obj1 || obj2) {
  console.log("둘다 true!");
}

let result = obj1 && obj2;
console.log(result); // 대입된 obj2 값

result = obj1 || obj2;
console.log(result); // 대입된 obj1 값

// 활용 예
// && 조건이 truthy 일 때, 무언가를 해야할 경우
// \\ 조건이 falshy 일 떄, 무언가를 해야할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("crash!~");
  }
  animal.owner = "바뀐 주인!";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인 있어");
  }
  animal.owner = "새로운 주인!";
}

obj1.owner && changeOwner(obj1);
// owner 가 있을 때만 changeOwner 를 실행해라
obj2.owner && changeOwner(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null, undefined 인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// \\ 값이 falshy 한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || "Hello";
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);

// 옵셔널 체이닝 연산자 Optional Chaining Operator
// null, undefined 인 경우를 확인할 때
let item = { price: 1 };
const price = item?.price;
// item 있니? 있으면 price 정보에 접근해봐
console.log(price);

let obj = { name: "dog", owner: { name: "yeji" } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);

// Nullish Coalescing Operator
// 널체크 하는 법
// ?? null, undefined
let num = 0;
console.log(num || "-1"); // -1
console.log(num ?? "-1"); // num 값을 사용하고 싶음(0)
