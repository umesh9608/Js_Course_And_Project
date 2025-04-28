// **********learn class and object**********
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     // Method to display car information
//     displayInfo() {
//         console.log(`
//             CarName = ${this.brand},
//             model: ${this.model} ,
//             years:(${this.year})
//             `);
//     }
// }

// const myCar = new Car("Toyota", "Corolla", 2020);
// myCar.displayInfo(); // Output: Car: Toyota Corolla (2020)



//*****incapsulation ********/

// class Counter{
//     constructor(){
//         let count = 0;
//         this.increment = ()=>{
//             count++;
//             console.log(count);
//         }

//         this.decrement=()=>{
//             count--;
//             console.log(count);
//         }
//     }
// }

// const Counter1 = new Counter();
// Counter1.increment(); // Output: 1
// Counter1.increment(); // Output: 2  
// Counter1.decrement(); // Output: 1

// ==================== Inheritance vs Polymorphism ====================

// **************** Inheritance:**********************
// - Child class (Dog) inherits properties and methods from Parent class (Animal).
// - Achieved using 'extends' keyword.
// - Child can use parent methods without any change.

// Example of Inheritance:
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak = () => {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    display = () => {
        console.log("dog method called");
    }
}

const dog = new Dog('Buddy');
dog.speak();    // Output: Buddy makes a noise.
dog.display();  // Output: dog method called


// ****************Polymorphism:*********************
// - Child class modifies (overrides) the behavior of parent class method.
// - Same method name, but different behavior in child class.
// - Still uses 'extends', but also overrides method.

// Example of Polymorphism:
class DogPoly extends Animal {
    speak = () => {
        console.log(`${this.name} barks loudly.`);
    }

    display = () => {
        console.log("dog method called");
    }
}

const dogPoly = new DogPoly('Max');
dogPoly.speak();    // Output: Max barks loudly.
dogPoly.display();  // Output: dog method called

// ==================== Summary ====================
// Inheritance ➔ Reuse parent methods without change.
// Polymorphism ➔ Override parent methods with new behavior.

//  Quick Tip:
// 'extends' = Inheritance
// 'override' = Polymorphism


// ==================== Abstraction ====================

//  What is Abstraction?
// - Hiding unnecessary details from the user.
// - Only showing essential features.
// - Helps to manage complexity in large programs.

// In JavaScript, true Abstraction is done using:
//   - Abstract Classes (using normal classes + method throwing error if not implemented)
//   - Interfaces (conceptually, but not directly as in Java)

// Example of Abstraction using Class:

class Vehicle {
    constructor(name) {
        this.name = name;
    }

    startEngine() {
        // Abstract method simulation: forcing child to implement
        throw new Error("startEngine() must be implemented by subclass");
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log(`${this.name} engine started `);
    }
}

const myCar = new Car('Toyota');
myCar.startEngine();  // Output: Toyota engine started 


// ==================== Summary ====================
// Abstraction ➔ Hides complexity, shows only necessary details.
// Abstract Class ➔ Class that forces child classes to implement specific methods.

//  Quick Tip:
// "Abstraction is like using a TV remote: You just press a button, 
// you don't care about the complex circuits inside!"

// Important:
// JavaScript doesn't have 'abstract' keyword, 
// so we simulate it using normal classes and error throwing methods.
