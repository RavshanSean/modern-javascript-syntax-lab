// exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const array2 = nums.map((currentElement) => {
    return currentElement * 2;
});
console.log(array2);


// exercise 2 
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings

console.log(pizzaToppings[1]);
console.log(pizzaToppings[2]);


//exercise 3 
const car = {
    make: 'Audi',
    model: 'q5',
  };

  const { make, model } = car;
  console.log(make);
  console.log(model);


//exercise 4
  
  const controversialPizzaToppings = [...pizzaToppings];
  console.log(controversialPizzaToppings);


//exercise 5

  const cloneCar = { ...car };
  cloneCar.model = 'q7';
  console.log('original:', car);
  console.log('Clone:', cloneCar);
  
  
 //exercise 6 
    const userProfile = {
        username: 'sean',
    }
    const selectedUsername = 'username'
    const selectedUserProfileName = userProfile[selectedUsername];;
    console.log(selectedUserProfileName)


//exercise 7


//exercise 8
function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  describeAnimal();

//second example of 8
  function describeAnimal(noun = 'cat', adjective = 'white') {
    return (`The ${noun} is ${adjective}.`);
  }
  console.log(describeAnimal());



//exercise 9

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

let food = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(food)

//exercise 10
  // SET LANGUAGE
const localLangCofig = null;
const LANG = localLangCofig || 'en';
console.log('localLangCofig', LANG);
  // SET WEBSITE THEME
const userSavedTheme = null;
const  USER_THEME = 'light'|| userSavedTheme;
console.log('User theme setting:', USER_THEME);


//Exercise 11
const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.name;
console.log(cat);





      

  



 



    


  


  