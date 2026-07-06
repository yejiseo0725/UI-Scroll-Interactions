// Set
const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);
console.log(set.has(2));

// 순회
set.forEach((item) => console.log(item)); // 1, 2, 3
for (const value of set.values()) {
  console.log(value);
}

// 추가 -- set은 중복 불가
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);
set.clear();

// 오브젝트 세트
const obj1 = { name: "apple", price: 8 };
const obj2 = { name: "banana", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs); // 2, price: 10

const obj3 = { name: "banana", price: 5 };
objs.add(obj3);
console.log(objs);

// Map
const map = new Map([
  ["key1", "apple"],
  ["key2", "banana"],
]);

console.log(map);

map.size;
map.has("key1");
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
map.get("key1");
map.set("key3", "kiwi");
console.log(map);
map.delete("key3");
map.clear();

// 오브젝트와의 큰 차이점
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, desc: "맛있어" };
const obj = {
  [key]: milk,
};

console.log(obj);
const map2 = new Map([key, milk]);
console.log(map2);

// 퀴즈
const animals = ["dog", "cat", "tiger", "cat", "tiger"];

function removeDup(array) {
  return [[...new Set(animals)]];
}
console.log(removeDup(animals));

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findInter(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}
console.log(findInter(set1, set2));
