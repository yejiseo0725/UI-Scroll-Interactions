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
