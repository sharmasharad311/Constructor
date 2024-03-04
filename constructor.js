// Question- What is Constructor in JavaScript?
// Answer- In JS, constructors are functions that are used to create and initialize objects. You can create a constructor function using the "function" keyword. Ex-

//constructor fun for creating Car objects.
function Car(brand, model, year){      
    this.brand = brand;
    this.model = model;
    this.year = year;
}

//Creating objects of the Car class using the Constructor
let car1 = new Car("Tata", "harrier", 2021);
let car2 = new Car("mahindra", "scorpio", 2021);

//Accesing the object properties
console.log(`Car 1: \nBrand: ${car1.brand}, \nModel Name: ${car1.model}, \nLaunced Year: ${car1.year}`);
console.log(`Car 2: \nBrand: ${car2.brand}, \nModel Name: ${car2.model}, \nLaunced Year: ${car2.year}`);

// expected Output:
/*
Car 1: 
Brand: Tata, 
Model Name: harrier, 
Launced Year: 2021

Car 2: 
Brand: mahindra, 
Model Name: scorpio, 
Launced Year: 2021
*/
