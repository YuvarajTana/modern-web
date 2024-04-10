## Deep understanding of JavaScript Concepts

### Execution context, this and clousers 

### Prototype and Prototype chain
  - Object.create() 
  - Object.setPrototypeOf()
  - function constructor
  - class
  

  ```JavaScript

    function Animal(name, energy){
      this.name = name;
      this.engergy = energy;
    }

    Animal.prototype.getDetails = function(){
      return `Name : ${this.name} and energy : ${this.energy}`;
    }

    function Dog (name, energy, breed) {
      Animal.call(this, name, energy)
      this.breed = breed
    }

    Dog.prototype = Object.create(Animal.prototype)
    Dog.prototype.bark = function () {
      this.energy -= 1
    }

    Dog.prototype.constructor = Dog
    
  ```
  **Reference Links**

### Event Loop

  ```JavaScript

    console.log(1);

    setTimeout(() => console.log(2));

    Promise.resolve().then(() => console.log(3));

    Promise.resolve().then(() => setTimeout(() => console.log(4)));

    Promise.resolve().then(() => console.log(5));

    setTimeout(() => console.log(6));

    console.log(7);
  ```

### Asynchronous Programming 

### Functional Programming Concepts

```JavaScript
        const compose = (...fns) => {
            return (input) => {
                return fns.reduceRight((acc,fn) => fn(acc),input);
            }
        };
        
        const pipe = (...fns) => {
            return (input) => {
                return fns.reduce((acc,fn) => fn(acc),input);
            }
        };

        const addFive = (a) => {
            return a + 5;
        };

        const subtractTwo = (a) => {
            return a - 2;
        };

        const multiplyTen = (a) => {
            return a * 10;
        };


        const composeTest = compose(addFive, subtractTwo, multiplyTen);

        const pipeTest = pipe(addFive, subtractTwo, multiplyTen);
        
        console.log(composeTest(10), pipeTest(10));

```


## Browser internals

## Performance

## Security 

## System Design 

## Architecture 

## Micro Front Ends



  Implement a function that takes a list of async functions as input and executes them in a series that is one at a time. The next task is executed only when the previous task is completed.

  Example
  Input: [
    asyncTask(3),
    asyncTask(1),
    asyncTask(2)
  ]

  Output:
  3 1 2

  Solution:

  ```JavaScript
    const asyncSeriesExecuter = function(promises) {
      promises.reduce((acc, curr) => {
        return acc.then(() => {
          return curr.then(val => {console.log(val)});
        });
      }, Promise.resolve());
    }
  ```