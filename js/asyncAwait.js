// 싱글 쓰레드 Single Thread
// 하나의 싱글 컨텍스트 스택
// js 는 기본적으로 '동기적(순서대로)' 으로 진행
function a() {
  for (let i = 0; i < 100000; i++);
  // 이것 때문에 마지막 result 결과가 매우 늦게 나오게 됨.
  return 1;
}
function b() {
  return a() + 1;
}
function c() {
  return b() + 1;
}

const result = c();
console.log(result);
// 호출 순서가 콜스택에 저장됨

// Wep APIs --> 도움 받아서 비동기적(병렬적)으로 실행되게 함.
// DOM API, setTimeout, setInterval, fetch, event listener
function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}
execute();

// quiz
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback 함수 전달 해야 함");
  }
  if (!seconds || seconds < 0) {
    throw new Error("0보다 커야 함");
  }
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => {
    console.log("어떤 호랑이가 나올까");
  }, 2);
} catch (error) {}

// 바나나와 사과
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bananana");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("appleee");
    }, 2000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

// async
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruit) => console.log(fruit));
