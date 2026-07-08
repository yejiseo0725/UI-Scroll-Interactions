function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds 가 0보다 작음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("어떤 호랑이가 나올까"))
  .catch(console.error)
  .finally(() => console.log("finish!!!"));

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fried Egg`);
}

function getChicken() {
  return Promise.resolve(`garden => chicken`);
}

getChicken()
  .catch(() => "chicken Basic")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

// async
function makeFriedEgg() {
  return getChicken()
    .catch(() => "chicken Basic")
    .then(fetchEgg)
    .then(fryEgg);
}
makeFriedEgg().then(console.log);

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

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// all: 병렬적으로 한번에 모든 Promise 들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// race: 주어진 promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

// error
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
