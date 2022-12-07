// reference type
var object1 = { value: 10 };
var object2 = object1; //* just reference object 1
var object3 = { value: 10 };
//? reference type created by the programmer, reference means address in memory

console.log(object1.value === object3.value);

// context vs scope
//! context says where we are in the object

const object4 = {
  a: function () {
    console.log(this); //! this keyword means that in what object function a lives
  },
};
object4.a();

// instanstiation
class Player {
  constructor(name, type) {
    console.log(this, 'line 22');
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log(this, 'line 34');
  }
  play() {
    console.log(`Wheeee i am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shely', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// wizard1.play();
// wizard1.introduce();
