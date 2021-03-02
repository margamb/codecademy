const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());

// Arrow Functions and this
// The ES6 shorthand:
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();

// Or the longhand format:
const robot = {
  energyLevel: 100,
  checkEnergy: function () {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();

// GETTERS
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    // if this._energyLevel is a number using the typeof operator
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  },
};

console.log(robot.energyLevel);

// SETTERS
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    // If numOfSensors is a number -> return number
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      // If numOfSensors is not a number -> return Sensors are currently down
      return 'Sensors are currently down.';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      return (this._numOfSensors = num);
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};
//Use the numOfSensors setter method on robot to assign _numOfSensors to 100. Change -> numOfSensors
robot.numOfSensors = 100;
console.log(robot.numOfSensors);

// FACTOTY FUNCTIONS
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
};

// To Create tinCan object (instances)
const tinCan = robotFactory('P-500', true);
console.log(tinCan.beep());

// Property Value Shorthand
function robotFactory(model, mobile) {
  return {
    model, // model: model,
    mobile, // mobile: mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// DESTRUCTURED ASSIGMENT
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  },
};
// Destructured Assignment
const { functionality } = robot;
console.log(functionality.beep());

//Methods BUILT-IN OBJECT METHOD

// EXERCISES
const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
};
// - To grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const robotKeys = Object.keys(robot);
// output -> [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// - To return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const robotEntries = Object.entries(robot);
/* output ->
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
*/

// - Another object that has the properties of robot but with a few additional properties. -> Object.assign()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// |> new object, it is different than robot
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true });
// Make sure that you are NOT changing the robot object.
/* output ->
{ laserBlaster: true, voiceRecognition: true }
 */

// |> Add more properties to robot object and change sentient value
const bestRobot = Object.assign({
  ...robot,
  laserBlaster: true,
  voiceRecognition: true,
  sentient: true,
});

// EXERCISE - Create a new factory function that can create object instances of your choice.
