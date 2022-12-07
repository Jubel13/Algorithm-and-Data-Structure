//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

let array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//! can be solved with nested loop

function firstRecurringCharacter2(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2(array));

function firstRecurringCharacter(input) {
  // check input
  if (input.length === 0 || !input) {
    return 'Input must be an array';
  }
  let hashTable = {}; // O(n) space complexity
  for (let i = 0; i < input.length; i++) {
    if (!hashTable[input[i]]) {
      hashTable[input[i]] = 1;
    } else {
      hashTable[input[i]]++;
      return input[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter(array));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
