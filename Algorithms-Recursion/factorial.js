// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  let answer = number;
  if (number <= 0) {
    return 1;
  }
  answer = answer * findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  //code here
  let answer = number;
  for (let i = number - 1; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(2));
