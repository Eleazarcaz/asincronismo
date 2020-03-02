const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Error'));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

const doSomethingOther = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch {
    console.error(error);
  }
};

console.log('Before');
doSomethingOther();
console.log('After');
