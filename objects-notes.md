#### OBJECTS

- The this keyword

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
};
goat.makeSound(); // Prints baaa method`
```

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  },
};
goat.diet();
/* Output will be "ReferenceError: dietType is not defined" 
That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object. */
```

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();

/* Output: herbivore
The calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.
*/
```

##### Arrow Functions and this

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  },
};

goat.diet(); // Prints undefined
```

##### Privacy in objects

- the idea that only certain properties should be mutable or able to change in value.
- One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

```js
const bankAccount = {
  _amount: 1000,
};

bankAccount._amount = 1000000; // Even so, it is still possible to reassign _amount

// another example
const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};
robot._energyLevel = 'high';
console.log(robot.recharge()); // Recharged! Energy is currently at high30%. undefined;
```

##### Getters

- Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property!

```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  },
};

// To call the getter method:
person.fullName; // 'John Doe'

//Another possibility is not to use the 'get' and in console we will have to call the methodo with the ()
person.fullName(); // 'John Doe'
```

- Advantages of using getter methods:
  - Getters can perform an action on the data when getting a property.
  - Getters can return different values using conditionals.
  - In a getter, we can access the properties of the calling object using this.
  - The functionality of our code is easier for other developers to understand.
  - TO KEEP IN MIND -> Two methods of an object cannot be called alike ( with get or withou get). One workaround is to add an underscore (\_) before the property name.

##### Setters

- We can also create setter methods which reassign values of existing properties within an object

```js
const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  },
};

console.log((person.age = 2));

// Then to use the setter method:
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
```

##### Factory Functions

- A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

```js
// Factory Function with parameters -> function to create objects
// monsterFactory funtion has 4 parameters and returns an object that has the properties: name, age, energySources and scare().
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPrase);
    },
  };
};
// To make an object -> ghost
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // BOO!
```

##### Property Value Shorthand

- destructuring -> ES6 introduced some new shortcuts for assigning properties to variables.

```js
const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age,
  };
};
const monsterFactory = (name, age) => {
  return {
    name,
    age,
  };
};
// Two examples work the same way.
```

##### Destructured Assignment

- We often want to extract key-value pairs from objects and save them as variables.

```js
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite',
  },
};
// To extract the residence property
const residence = vampire.residence;
console.log(residence); // Transylvania
// The same code with destructured assignment
const { residence } = vampire;
console.log(residence);
// To use destructured assignment to grab nested properties of an object
const { day } = vampire.preferences;
console.log(day); // stay inside
```

##### Built-in Object Methods

- Built-in methods for Objects: .hasOwnProperty(), valueOf()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
- There are also useful Object class methods such as Object.assign(), Object.entries(), Object.keys()...
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor
