// Create a function that reverse a string
// "Hi, My name is Jubel"

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Input must be string';
  }
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverse('Hi, My name is Jubel'));

//? Another solution

function reverse2(str) {
  //Check input

  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Input must be string';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

console.log(reverse2('Hi, My name is Jubel'));

//? Third solution

function reverse3(str) {
  //Check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Input must be string';
  }

  return str.split('').reverse().join('');
}

const reverse4 = (str) => str.split('').reverse().join('');

console.log(reverse4('Hi, My name is Jubel'));
