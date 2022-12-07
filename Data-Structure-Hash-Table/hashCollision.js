let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhhhh!');
  },
};

console.log(user.age); //* O(1)
user.spell = 'abracadabra'; //* O(1)
console.log(user);
user.scream(); //* O(1)

//! Collision in hash tables means that if you want to store something in memory, probably that memory has already been occupied, so the program make something, like linked-list

//? When have collision, reading and writing is slowed down, then the Big-O is O(n/k), where k is the size of hash table

//* Hash table in othe language

//* in javasscript object, the key value is a string, but in ES6, the key can be anything with Map()

const a = new Map(); //? Maintain insertion order 

//* Sets only store key, not value