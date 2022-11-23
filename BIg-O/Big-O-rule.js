//? Always use wors case scenario -> for example if you loop through items and the item is in the last index

//? Drop the constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

//* O(1 + n/2 + 100) -> O(n/2 + 1) -> O(n + 1) -> O(n) : as n get larger and larger, dividing by 2 is insignificant

//? Rule no.3: Different terms for input

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

//* O(a+b) or O(m+n) => because of different input
//* if there is nested loop, then -> O(a*b)

// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logPairBoxes(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(boxes[i], boxes[j]);
    }
  }
}

logPairBoxes(boxes);

//* O(n*n) -> O(n^2)

//? Rule no.4 -> Drop non dominant

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

//* O(n + n^2) -> O(n^2) -> because n^2 is the way bigger than n in the term of scale, as the n grow.
