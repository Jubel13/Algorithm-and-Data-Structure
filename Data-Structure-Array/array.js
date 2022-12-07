const strings = ['a', 'b', 'c', 'd'];

console.log(strings[2]); //? O(1)

//push
strings.push('e'); //? O(1)

//pop
strings.pop(); //? O(1)

//unshift
strings.unshift('x'); //? O(n) => because array reassigned the indeces
//! ['a', 'b', 'c', 'd'];
//!   0    1    2    3'
//* ['x', 'a', 'b', 'c', 'd'];
//*   0    1    2    3    4

//splice
strings.splice(2, 0, 'alien'); //? O(n/2) => O(n)

console.log(strings);

//? in C++ (static array) => the size of array is predetermined

//* int a[20] => set array with 20 items
//* int b[5] {1,2,3,4,5} => set array with 5 numbers provided

//! in javascript, array is dynamic, computer allocate memory as the array grows, append array can be O(n) => because dynamic array looping the array to add new item.