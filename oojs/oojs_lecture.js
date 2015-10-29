// Obect ordiented prgramming
// Objects are like living, breathing things
// Interact w/ objects at a super high level
// Objects encapsulate complexity
/*
var Dog = {
  legs: 4,
  name: "Fido",
  //this is a method
  bark: function(){
    console.log("woof!");
  }
}
// invoke the object method
Dog.bark();

// DO NOT NEED TO RE WRITE OBJECTS LIKE THIS MAKE PROTOTYPE

var Dog2 = {
  legs: 4,
  name: "Fido",
  //this is a method
  bark: function(){
    console.log("arf!");
  }
}

Dog2.bark();
*/
// Constructor function
function Dog(name, bark, legs){
  this.legs =  4;

  // accessor
  this.getLegs = function(numLegs){
    return this.legs;
  }
  // accessor
  this.setLegs = function(numLegs){
    this.legs = numLegs;
    if(typeof numLegs == 'number') {
      this.legs = numLegs;
    } else {
      console.log('must add a number');
    }
    // end accessors
  }
  this.name = 'Fido';
  this.bark = function(){
    console.log(bark);
  }

}

// create an instance of this object

var doggy = new Dog('Something', "something");
doggy.bark();
var dog2 = new Dog('Fefe', 'lebow', 5);
dog2.bark();

dog2.getLegs();

// encapsulation

// when we are cretating objects we want ot control when that value is something
// Accesor

// cretae a person constructor function w/ first and last name props and create setter methods for both
// inside method must verify that input if a string less than 50 char

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  //accessor functions for this object
  // Get first
  this.getFirst = function(){
    return this.firstName;
  }
  // Set first
  this.setFirst = function(firstName){
    if(typeof firstName === 'string' && firstName.length < 50){
      this.firstName = firstName;
      console.log('Woohoo!')
    } else {
      console.log('Invalid name!');
    }
  };
  // Get last
  this.setLast = function(lastName){
    return this.lastName;
  }
  // set lastName
  this.setLast = function(lastName){
    if(typeof lastName === 'string' && lastName.length < 50){
      this.lastName = lastName;
      console.log('Woohoo numba 2!');
    } else {
      console.log('Invalid name!')
    }
  // end accessor function
  }
  //Person.setFirst('Alex');

}

var alex = new Person('alex', 'bennett');

console.log(alex.firstName);
