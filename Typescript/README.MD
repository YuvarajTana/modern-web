## Learning TypeScript by building 

## What is typescript
  - Typescript is a super set of JavaScript, which adds static typing to JavaScript language. 
  - Also compiles code into plain JS which is understandable most of browser environments


## Why typescript
  - It adds typing to JavaScript, this in turn will help to catch bugs early means during development 
  - Predictable and maintainable which means your application less prone to errors

### Basic Types

```TypeScript

  // string, number and boolean 

  let age:number = 20;
  let name: string = 'Yuvaraj';
  let isActive : boolean = true;

```

### Working with functions 

```TypeScript
// Parameter and Return type annotations
// This function accepts argument of type number and return a value of type string 
  
  function getUserNameById(id: number): string {
    return 'Rajesh';
  }

```


### Working wth complex types - Array and Object

```TypeScript

  //  Using type alias
  type User = {
    name: string;
    age: number;
  };

  const users: User[] = [];


  // With interface 

  interface User1 {
    name: string;
    age: number;
  }

  const users1: User1[] = [];

```

### Property Modifiers

  **Optional Properties**

  ```TypeScript
    
    // Here city is optional property, we can have object of User type without city property as well

    interface User {
      name: string;
      age: number;
      city?: string;
    }
    
  ```
  **Read only Properties**
  ```TypeScript
    interface User {
      readonly name: string;
      readonly age: number;
    }
  ```
### Extended Types



