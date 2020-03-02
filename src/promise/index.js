function someWillHappen() {
  return new Promise((resolve, reject) => {
    true ? resolve('Hey!') : reject('Whoopsssss!');
  });
}

someWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

function someWillHappen2() {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Muy bien');
        }, 3000)
      : reject(new Error('Whoops'));
  });
}

someWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([someWillHappen(), someWillHappen2()])
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
