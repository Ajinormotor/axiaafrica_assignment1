

// DEFINING CLASSES:

//  * Create two classes: 
//  * Animal and Dog. 
//  * the Animal class should take two parameters in the constructor (name and animalType). 
//  * Set them as its public properties. 
//  * in addition, the Animal class should have two functions: sayName and sayAnimalType. 
//  * sayName prints name, and sayAnimalType prints animalType initialized in the constructor. 
//  * Finally, the Dog class inherits from the Animal class. 

//  * 1. Let’s first define the Animal class and the specified required functions.
 
// Define the Animal class
function Animal(name, animalType) {
    this.name = name;
    this.animalType = animalType;
  }
  
  // Define the methods for the Animal class
  Animal.prototype.sayName = function() {
    return this.name;
  };
  
  Animal.prototype.sayAnimalType = function() {
    return this.animalType;
  };
  
  // Define the Dog class inheriting from Animal
  function Dog(name) {
    Animal.call(this, name, "Dog");
  }
  
  // Inherit methods from Animal prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Example Application
  var myAnimal = new Animal("pitbull", "pokemon");
  var myDog = new Dog("wizzybaby");
  
  // Output to HTML
  var displayDiv = document.getElementById("display");
  displayDiv.innerHTML += "<h2>Animal Information:</h2>";
  displayDiv.innerHTML += "<p>Name: " + myAnimal.sayName() + "</p>";
  displayDiv.innerHTML += "<p>Animal Type: " + myAnimal.sayAnimalType() + "</p>";
  
  displayDiv.innerHTML += "<h2>Dog Information:</h2>";
  displayDiv.innerHTML += "<p>Name: " + myDog.sayName() + "</p>";
  displayDiv.innerHTML += "<p>Animal Type: " + myDog.sayAnimalType() + "</p>";
  