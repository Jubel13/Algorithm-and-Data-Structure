const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('Running');
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
      break;
    }
  }
}

findNemo(everyone);

//* O(n) -> Linier Time: as the input item increases, the time to do the looping increases

function logFirstTwoFish(fishes) {
  console.log(fishes[0]);
  console.log(fishes[1]);
}

logFirstTwoFish(everyone); //* O(2) -> flat line -> O(1): Constant time, doesn't matter how many input, the time will be constant

//? ForEach
const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === 'nemo') {
      console.log('Found Nemo');
    }
  });
};

//? For of loop
const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish == 'nemo') {
      console.log('Found Nemo');
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);
