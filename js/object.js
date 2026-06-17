const obj = {
  name: "ellie",
  age: 20,
};

// 정적 접근
obj.name;
obj.age;

// 동적 접근
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "name"));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, "job", "engineer");
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

const x = 0;
const y = 0;
const coordinate = { x, y }; // x: x, y: y
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: APPLE`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: ORANGE`);
//   },
// };

// 생성자 함수 -- 특정한 템플릿으로 간편 객체 생성: 대문자 시작
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

const apple = new Fruit("apple", "APPLE");
const orange = new Fruit("orange", "ORANGE");

console.log(apple);
console.log(orange);
