// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

//empty menu object
const menu = {
  //This property will ultimately contain a mapping between each course and the dishes available to order in that course.
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  //The method should take in three parameters: the courseName, the dishName , and the dishPrice.
  addDishToCourse(courseName, dishName, dishPrice) {
    //The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
    const dish = {
      dishName,
      dishPrice,
    };
    //The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
    this._courses[courseName].push(dish);
  },
  //function which will allow us to get a random dish
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    const dish = dishes[randomIndex];
    console.log(dish);
    return dish;
  },
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice =
      appetizer.dishPrice + mains.dishPrice + desserts.dishPrice;

    return `Your meal is ${appetizer.dishName}, ${mains.dishName}, ${desserts.dishName}. The price is $${totalPrice}.`;
  },
};

//to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Tomato Salad', 2.25);
menu.addDishToCourse('appetizers', 'Chesse', 5.25);

menu.addDishToCourse('mains', 'Pasta', 5.5);
menu.addDishToCourse('mains', 'Paella', 7.5);
menu.addDishToCourse('mains', 'Pizza', 6.5);

menu.addDishToCourse('desserts', 'Brownie', 3.5);
menu.addDishToCourse('desserts', 'Cookies', 2.5);
menu.addDishToCourse('desserts', 'CheeseCake', 6.5);

let meal = menu.generateRandomMeal();
console.log(meal);
