# Traversy Media 11 Hour Javascript Tutorial

```javascript
let firstName = "john";
let lastName = "Doe";

console.log(firstName + " " + lastName);

let age = 30;
console.log(age);
```

## _Naming Conventions_

-only letters, numbers, underscores and dollar signs

-can't start with a number

## _Multi-Word Formatting_

-camelCase

-underscore

-Pascalcase

-lowercase

## _Reassigning variables_

```javascript
age = 31;
console.log(age);
```

## _Declare multiple values at once_

```javascript
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
```

## _DATA TYPES_

-String

```javascript
const Firstname = "Sarah";
```

-Number

```javascript
const Age1 = 32;
```

-Boolean

```javascript
const hasKids = true;
```

-Null

```javascript
const aptNumber = null;
```

## _Refernce Types_

```javascript
const Numbers = [1, 2, 3, 4];

const person = {
  name: "Anne",
};

function sayHello() {
  console.log("hello");
}

const output = sayHello;
console.log(output, typeof output);

console.log(Firstname, typeof Firstname);
```

## _TYPE CONVERSIONS_

```javascript
let age = "35";
```

- string to number conversion

```javascript
age = parseInt("36");
```

- number to string conversion

## _ARRAYS_

```javascript
const numbersArray = ["one", , , "three"];
numbersArray[0] = undefined;
```

- undefined is a value that does not exist in the array

```javascript
delete numbersArray[0];
```

- deletes an element from the array by index position

## _OBJECTS_

```javascript
person["address"] = "123 Main St.";
```

- adds new property and assigns it's value

```javascript
let amount = "100";
```

- Convert string to number

```javascript
amount += +Amount;
```

- (+) converts a string into an integer or float value

```javascript
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
```

_Convert number to string_

```javascript
amount = amount.toString();
amount = String(amount);
```

_Convert String to decimal_

```javascript
amount = parseFloat(amount);

console.log(amount, typeof amount);
```

### _1. Concatenation_

---

#### **concatenate strings together**

x = 'hello' + ' ' + 'world'

#### **Exponent (Raise to the power of )**

```javascript
x = 2 \*\* 3 //2 raised to the power of 3
```

#### **Increment**

x++

#### **Decrement**

x--

### _2. Assignment Operators_

---

```javascript
  x = 10

x += 5 //adds 5 to 10

x -= 5 //removes 5 from 10 + 5

x \*= 5 //multiplies 10 by 5

x /= 5

x %= 5

x \*\*= 5

```

### _3. Comparison Operators_

---

```javascript
x == 2;
```

- this is just comparing the values not like the '=' that assigns values

```javascript
x = 2 === 2;
```

- it evaluates the type and value ie it must be the same value and data type

```javascript
x = 2 != 2; ! is not equal to
console.log(x)
```

## _TYPE COERCION_

- when you apply operators to values that have different types

```javascript

let x;

x = 5 + '5'; //this will give 5 and string

x = 5 + Number('5'); //this will give 10 and number

x = 5 \* '5' //this will give you 25 and number

x = 5 + null; //this will give 5 and number (null is coerced into 0)

x = Number(true); //this will give 1

x = Number(false); //this will give 0

x = 5 + Number(true) //this will give 6 since true as a number is 1

console.log(x, typeof x)
```

## _WORKING WITH STRINGS_

```javascript
let x;

const name = "Anne";

const age = 30;

x = "Hello my name is " + name + " and I am " + age + " years old";
```

### _Template Literals_

---

_Use of Backticks_

x = `Hello, my name is ${name} and I am ${age} years old`

## _PROPERTIES AND METHODS_

```javascript


const s = 'Hello World'

x = s.length; //length of the string

x = s[2]; //access vaule by key

x = s.**proto**

x = s.toUpperCase

x = s.toLowerCase

x = s.charAt(0); //its the same as x = s[2]

x = s.indexOf('H')

x = s.substring(0, 4); //will give Hell ie the letters from 0 to 4

x = s.substring(7); //this will start from 7 to the end

x.slice(-11, -6)

x = s.trim(); //it trims the white space

x = s.replace('World', 'John');
//the first argumemt is the word you want to replace and the second argument is what you want to replace it with

x = s.includes('Hello');
//this will give true or false if the word exists in the strring or not

x = s.valueOf();
//this will just give you what is in that variable

x = s.split(' ');
//this will spilt according to the number of spaces in the string

console.log(x)
```

## _Capitalize Challenge_

```javascript

let x;

const text = 'developer';

x = text.replace('developer', 'Developer');

console.log(x)

Solution 2

let mynewstring;

mynewstring = text.charAt(0).toUpperCase() + text.substring(1);

console.log(mynewstring)
```

## _WORKING WITH NUMBERS_

```javascript
let x;
const numberr = 5;

x = numberr.toString();

x = numberr.toString().length;

x = numberr.toFixed(2);

x - numberr.toPrecision(3);

x = numberr.toExponential(2);

x = numberr.toLocaleString("en-US");

x = numberr.valueOf();
console.log(x);
```

## _MATH OBJECT_

```javascript
console.log(Math);

let x;

x = Math.sqrt(9);

x = Math.abs(-4)

x = Math.round(4.3);

x = Math.ceil(3.6);

x = Math.floor(4.33);

x = Math.pow(2, 3);

x = Math.min(2, 4, 6);

x = Math.max(8, 7);

x = Math.random();

x = Math.random() \* 10 + 1; // number between 1 & 10

console.log(x)
```

##_Dates and Times_

```javascript
let d;

d = new Date();

d = new Date(2021, 0, 10);
```

- year month and day, the month is counted by index so 0 = jan and 11 = december

```javascript
d = new Date("2021-07-10");
```

- the month here is not index based

```javascript
d = new Date("07/10/2021 12:30:00");
```

- the month here is not index based

```javascript
d = Date.now();
```

- this will give the exact millisecond you're in now

```javascript
d = new Date('07-10-2022 12:30:00');

d = d.getDate();
d = d.getTime();
d = d.valueOf()

console.log(d);



-get date
let today = new Date();today is a date object
console.log("Today's day: " , today);

//displays the current time in milliseconds since Jan 1st of year 1
```

## _DATE OBJECT METHODS_

```javascript

let x;

let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf()

x = d.getFullYear();

x = d.getMonth(); //its also index-based

x = d.getDate(); //day of the month

x = d.getDay; //day of the month

x = d.getDate();

x = d.getMinutes();

x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//API for dates Intl.DateTimeFormat

x = Intl.DateTimeFormat('en-US').format(d);

x = Intl.DateTimeFormat("default").format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); to get the month in full

x = d.toLocaleString("default", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: 'numeric',
minute: 'numeric',
second : 'numeric',
timeZone: "Africa/Lagos",
});

console.log(x);
```

## _ARRAYS & OBJECTS_

let x;

ARRAYS

### _Array Literal_

```javascript
const numbers = [12, 45, 21, 56, 22, 55];
const mixed = [12, "Hello", true, null];
```

### _Array Constructor_

```javascript
const fruits = new Array("apple", "orange", "grape");
console.log(fruits);
```

### _Array Index_

---

```javascript
x = numbers[3];

x = numbers[1] + numbers[0];

x = numbers.length;

x = fruits[2] = "pear"; //to change a value

fruits[fruits.length] = "blueberry";
//add to the end

console.log(fruits);
console.log(x);
```

## _BASIC ARRAY METHODS_

```javascript
let x;
const arr = [23, 45, 27, 97, 45];

arr.push(100) //to add to the end

arr.pop() //remove the last element

arr.unshift(99); //to add to the front

arr.shift(); //to remove from the front

arr.reverse();

x = arr.includes(97); //will give true or false

x = arr.indexOf(45);

x = arr.slice(1, 2); x = arr.slice(start-index, end-index );

x = arr.splice(); x = arr.splice(start-index, index you want to remove );
//and it changes the initail array(deleting from the initial array)

x = arr.slice(1, 4);

console.log(arr);
console.log(x);
```

## _NESTING, CONCAT AND SPREAD_

#### _NESTING IS HAVING AN ARRY AS AN INDEX INSIDE OF ANOTHER ARRAY_

```javascript
let x;

const fruits = ["apple", "grape", "orange"];

const berries = ["strawberry", "blueberry", "raspberry"];

fruits.push(berries);

x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];
//berries array is 1 and strawberry in berries arry is 0

x = fruits.concat(berries); //
adds them together as 1 string

x = [...fruits, ...berries]; spread operator (...)
//does the same thing concat does

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// flatten arrays asin make it 1 array

x = arr.flat();

```

### _Static Methods on Array Object_

```javascript
Array.isArray();
//checks to see if an object is an array

x = Array.isArray(fruits);

x = Array.from("12345");

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
//makes an array of the provided variables/arguments
console.log(x);
```

## _OBJECT LITERALS_

a data structure that holds key/value pairs eg

```javascript
const person = {name: 'John'}
let x;

const person = {
name: 'John Doe',
age: 30,
isAdmin: true,
address: {
street: '123 Main Street',
city: 'Boston',
state: 'MA',

     },

    // Arrays can be added in as well

     hobbies: ['sleeping', 'coding'],

};

x = person.name
//to access the name value in the object

x = person['age'] //same as above

x = person.address.state
//to access an object inside another object


x = person.hobbies
//to access the array in the object

x = person.hobbies[0]
//to access a particular value

person.name = 'Jane Doe';
//to change a property

person.isAdmin = false

delete person.age;
//this will remove the age property

person.hasChildren = true;
//to add properties into the objecct

person.greet = function () { a function can be added to objects
console.log(`Hello, my name is ${this.name}`) this. referst to the object
}

person.greet();

```

## _OBJECTS SPREAD OPERATOR & METHODS_

```javascript
let x;

const todo = {};

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;
```

### _Nesting_

---

```javascript
const person = {
  address: {
    coords: {
      lat: 12.34233,
      lat: 34.2232,
    },
  },
};

x = person.address.coords.lat;
```

### _Spread Operator_

---

```javascript
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 5 };

const obj3 = { ...obj1, ...obj2 };

//same as above adds both objects together and spreads them out into 1 object

const obj4 = Object.assign({}, obj1, obj2);

//former way of spread
```

### _objects in arrays_

---

```javascript

const todos = [
{id: 1, name: 'Buy Milk'},
{id: 2, name: 'Sleep'},
{id: 3, name: 'Clean'},
]

x = todos[0].name

//to access objects in arrays

x = Object.keys(todo)

//it'll take the keys from the todo object and put them in an array

to get the length of an object

x = Object.keys(todo).length
//get the keys which will make it an array and appley the .length method

x = Object.values(todo);

x = Object.entries(todo);
//to get array of the key value pairs

x = todo.hasOwnProperty('age')
//will give true or false and will check if your object has that particular property

console.log(x);

```

### _Destructuring & Naming_

---

### Naming

### Instead of doing:

```javascript
const fName = "John";
const lName = "Doe";
const age = 30;

const person = {
  fName: fName,
  lName: lName,
  age: 30,
};
```

### Do this instead

```javascript
const person = {
  fName,
  lName,
  age,
};

//in this case you're using the variables to make the new variables
```

### _Destructuring_

#### instead of doing:

```javascript
const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const id = todo.id;
```

#### Do this instead

```javascript
const { id, name } = todo;

const {
  id,
  title,
  user: { name },
} = todo;

console.log(name);
```

### Destructure Arrays

```javascript
const numbers = [1, 23, 45, 54];

const [first, second] = numbers;
//arrays are destructutred using square brackets

const [first, second, ...rest] = numbers;
//rest operators are used display the rest of teh array

console.log(first, second, rest);
```

## JSON Intro

### Javascript Object Notation

- its a data interchage format
- a way of string data in a simple human and readable format
- like get information from APIs etc

### A Javascript object

```javascript

//convert our Javascript objects to JSON

const post ={
id:1,
title: 'sleep',
body: 'this body',
}

//convert to JSON String

const str = JSON.stringify(post);


PARSE JSON
const obj = JSON.parse(str);
//local storage is a way to store things on your object

console.log(obj);
```

## Object Challenge

```javascript
let x;

const library = [
  {
    title: "hello",
    author: "anne",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Steve Jobs",
    author: "Walter",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "BTS",
    author: "HYBE",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

//Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
```

## Functions, Scope & Execution Context

### Function Basics

```javascript
//function is a way to group code together to use later

function sayHello() {
console.log("Hello World");
}

sayHello();

passing data into functions (parameters)

function add(num1, num2) { /
/parameters
console.log(num1 + num2);
}

add(5, 10)
//when passing in values they're called arguments

function subtract(num1, num2) {
return num1 - num2;
//we return something because we want to do something with that value
}

const result = subtract(10,2)

console.log(result, subtract(10, 2))

```

## Parameters & Arguments

```javascript
function registeredUser(user = "Bot") {
  //newest way to assign default parameters
  if (!user) {
    //to have default parameters (old way)
    user: "Bot";
  }
  return user + " is registered";
}

console.log(registeredUser());
```

## Rest Parameters

```javascript
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));
```

## Objects as Parameters

```javascript
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};

console.log(loginUser(user));
```

## Arrays as Parameters

```javascript
function getRANDOM(arr) {
const randomeIndex = Math.floor(Math.random() \* arr.length);

const item = arr[randomeIndex];
console.log(item);

}

getRANDOM([1,2,34,5,56,6,7])

or function getRANDOM(...arr) getRANDOM(1,2,34,5,56,6,7)

```

## Function Declaration & Expression

### Function Declaration

```javascript
function addDollarSign(value) {
return '$' + value;
};

console.log(addDollarSign(100));

Function Expression

const addPlusSign = function

(value) {
return '+ + value';
};

```

## Arrow Functions

- they have implicit return and lexical scope
  function add(a, b) {
  return a + b;
  }

#### Arrow function syntax

```javascript

const add = (a, b) => {
return a + b;
};

//to shorten it
//implicit Return
const subtract = (a, b) => a - b;

//can leave off () only with a single parameter
const double = (a) => a \* 2;
//its an implicit return because we're not specifying the return with the return keyword

```

- Returning an object

```javascript
const createObj = () => ({
  name: "Brad",
});

//surround the curly braces with parenthesis

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});
```

- Arrow function in a callback

```javascript
numbers.forEach((n) => console.log(n));
```

## Immediately Invoked Function Expression (IIFE)

- create/declare a function and invoke them at the same time
- to avoid global scope pollution

```javascript
(function () {
run your code
})();

(function () { //iife with a function inside
const user = "Brad";
console.log(user);
const hello = () => console.log('hello from the iife');
hello();
})();

(function (name) { //iife with a parameter
console.log('hello ' + name);
})('Shawn');

(function hello() { //name function
console.log('Hello');
})();

```

## Function Challenges

### **Challenge 1: convert farenheit to celcius**

---

```javascript
function getCelcius(f) {
const celcius = (f - 32) \* 5 / 9
return celcius;
}

const getCelcius2 = (f) => ((f - 32) \* 5) / 9; arrow function

console.log(getCelcius(50))

console.log(getCelcius2(50))

```

### **Challenge 2**

---

```javascript
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(min);

  return {
    min,
    max,
  };
}
console.log(minMax([1, 2, 3, 4, 5]));
```

### **Challenge 3**

---

```javascript
((length, width) => {
const area = length \* width
const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
console.log(output);
})(20, 10);
```

## EXECUTION CONTEXT

```javascript
const x = 100;
const y = 50;
function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
```

## CALL STACK

- it just shows how the code is run.
- LIFO- Last In First Out

## Logic & Control Flow

### - If statements

---

```javascript
if (true) {
  console.log("This is True");
}
```

- == is to evaluate the value
- === is to evaluate the value and type

### - If-Else & Nesting

---

```javascript
const d = new Date(10, 30, 2022, 20, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

//Nested If

if (hour < 12) {
  if ((hour = 6)) {
  }
}
```

### - Switch Staements

---

```javascript
const date = new Date(2022, 1, 8, 0, 0);
const month = date.getMonth();

console.log(month);

switch (month) {
  case 1:
    console.log("it is january");
    break;
  case 2:
    console.log("it is february");
    break;
  case 3:
    console.log("it is march");
    break;
  default:
    console.log("it is none");
}
```

## Calculator Challenge

```javascript
function calculator(num1, num2, operator) {
let result = "";

switch (operator) {
case "+":
result = num1 + num2;
break;
case "-":
result = num1 - num2;
break;
case "_":
result = num1 _ num2;
break;
case "/":
result = num1 / num2;
break;
default:
result = "Invalid Operator";

}
console.log(result);
return result;
}

calculator(12, 2, '/');

```

## Truthy & Falsey Values

### Falsy Values:

- false
- 0
- "" or ''(empty string)
- null
- undefined
- NaN

- an empty array [] and an empty function function (){} is a truthy

---

- checking for empty array

```javascript
const posts = [];
if (posts.length > 0) {
  console.log("list posts");
} else {
  console.log("no posts to list");
}
```

checking for empty objects

```javascript
const user = {};

if (Object.keys(user).length > 0) {
  console.log("list user");
} else {
  console.log("no user");
}
```

## Logical Operators

- && - AND Operator
- || - OR Operator
- ! - NOT Operator

- && - will return the first falsy value or the last value

- || = will return the first truthy value or the last value

- ?? - wil return the right side operand when the left side is null or undefined

## Logical Assignment

- ||= assigns the right side value only uf the left side is a falsy value

```javascript
let a = false;

if (!a) {
a = 10;
}

a = a || 10; if a is falsy then let a = 20

a ||= 10; it does the same thing as the above

console.log(a);

```

- &&= assigns the ri ght side value only if the left side is a truthy value

```javascript
let b = 10;

if (b) { /checking if b is a truthy or falsy value
b=20
}

b = b && 20;

b &&= 20;

console.log(b);

```

- ??= assigns the right side value only if the left is null or undefined explicitly

```javascript
let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
```

## Tenury Operator

The tenary operator returns one of two values depending on whether its condition evaluates to true or not, and this can be used in place of an `

- a way of shortening if statements
  const age = 19;

```javascript
age >= 18
  ? console.log("You are old enough to vote")
  : console.log("you can't vote yet");
```

- using an if statement

```javascript
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cant vote");
}
```

- using a ternary operator

```javascript
age >= 18 ? console.log("you can vote") : console.log("you cannot vote");
```

- if age is true log else(:) log the second thing

```javascript
//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote);

//Multiple statements

//long version
const auth = true;
let redirect;

if (auth) {
  alert("welcome to the dashboard");
  redirect = "/dashboard";
} else {
  alert("access denied");
  redirect = "/login";
}

//ternary version

const redirect = auth
  ? alert("welcome to the dashboard", "/dashboard")
  : alert("access denied", "/login");
console.log(redirect);

//when there is no else in your if staement

auth ? console.log("welcome to the dashboard") : null;

//OOORRR
auth && console.log("welcome to the dashboard");
```

## Loops & High Order Array Methods

### For Loops

---

```javascript
for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
  statement;
}
```

- initialExpression - initializes a variable/counter

- conditionExpression - condition that the loop will continue to run as long as it is met or until the condition is false

- incrementCondition - expression that will be executed after each iteration of the loop. Usually increments the variable

- statement - code that will be executed each time the loop is run. To execute a 'block' of code use the `{}` syntax

```javascript
for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("7 is my lucky number");
  } else {
    console.log("Number " + i);
  }
}
```

- you cant use const to declare the variable in the for loop

### Nest Loops

---

```javascript
for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);

  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

- **Loop through an array**

```javascript
const names = ["anne", "brad", "john", "tim"];

for (let i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(names[i] + " is the best");
  } else {
    console.log(names[i]);
  }
}
```

## Break & Continue Statements

**Break**: its similar to exit sub, it stops the loop once your requirement is meant even if the loop hasnt finished

```javascript
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking");
    break;
  }

  console.log(i);
}
```

**Continue**:

```javascript
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }

  console.log(i);
}
```

## While & Do-While Loop
```javascript
let i = 0
while (i <= 20) {
console.log('Number ' + i);
i++
}

```
### Loop Over arrays
```javascript
const arr = [10, 20, 30, 40];
while (i < arr.length) {
console.log(arr[i]);
i++
}

```
### Nesting while loops

```javascript
const arr = [10, 20, 30, 40,50];
while (i <= 5) {
console.log('Number ' + i);

     let j = 1;
     while (j <= 5) {
         console.log(`${i} * ${j} = ${1 * j}`);
         j++;
     }

     i++;

}

```
## Do while loop

- means you want the code to run at least once even if the condition is never met
```javascript
do {
console.log('Number ' + i);
i++
}while(i <=20)

```

## FizzBuzz Challenge

- **For Loop**

```javascript
for (let i = 0; i <= 100; i++) {

if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz");
continue;
} else if (i % 3 === 0) {
console.log("Fizz");
continue;
} else if (i % 5 === 0) {
console.log("Buzz");
continue;
} else {
console.log(i);
}
}

```
- **While loop**

```javascript
let i = 0;
while (i <= 100) {
if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz");
} else if (i % 3 === 0) {
console.log("Fizz");
} else if (i % 5 === 0) {
console.log("Buzz");
} else {
console.log(i);
}

i++;
}

```

### For...Of Loop

- cleaner way to iterate through an array

### Loop through Arrays

```javascript
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'anne'},{name : 'kate'},{name: 'john'}
]

for (const item of items) {
console.log(item);
}

for (const user of users) {
console.log(user.name);
}


```
### Loop over strings

```javascript
const str = 'Hello World';

for (const letter of str) {
console.log(letter);
}

Loop Over Maps

const map = new Map();
map.set('name', 'anne');
map.set('age', 30);

for (const [key, value] of map) {
console.log(`Your ${key} is ${value}`);
}

```

## For...In Loop

- helps ypu iterate through an object

```javascript
const colorObj = {
color1: 'red',
color2: 'blue',
color3: 'orange',
color4: 'green'
};

for (const key in colorObj) {
console.log(key, colorObj[key]);;
}

```
### Loop over array

```javascript
const colorArr = ['red', 'green', 'blue', 'yellow'];
for (const color in colorArr) {
console.log(color, colorArr[color]);
}

```

## High Order Array Methods

### For Each

```javascript
const socials = ['facebook', 'twitter', 'Linkedin', 'instagram'];

socials.forEach(function (item) {
console.log(item);
})

socials.forEach((item) => console.log(item));

socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

function logSocials(social) {
console.log(social);
}

socials.forEach(logSocials);

```
### For Objects


```javascript
const socialObjs = [
{name:'Twitter', url:'https:twitter.com'},

     {name:'instagram', url:'https:instagram.com'},

     {name:'linkedin', url:'https:linkedin.com'},

     {name:'facebook', url:'https:facebook.com'}

]

socialObjs.forEach((item) => console.log(item.url, item.name))

```
### Array.filter


```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
return number % 2 === 0;
})

shorter version
const evenNumbers =numbers.filter((number)=> number % 2 ===0)

```

- Same with foreach

```javascript
const evenNumbers = [];
numbers.forEach((number) => {
if (number % 2 === 0) {
evenNumbers.push(number);
}
});

console.log(evenNumbers);

```
```javascript
const companies = [
{ name: "company 1", category: "retail", start: 1981, end: 2004 },
{ name: "company 2", category: "finance", start: 1992, end: 2008 },
{ name: "company 3", category: "retail", start: 1999, end: 2007 },
{ name: "company 4", category: "auto", start: 1989, end: 2010 },
{ name: "company 5", category: "retail", start: 2009, end: 2014 },
{ name: "company 6", category: "tech", start: 1987, end: 2010 },
{ name: "company 7", category: "finance", start: 1986, end: 1996 },
{ name: "company 8", category: "auto", start: 2011, end: 2016 },
{ name: "company 9", category: "tech", start: 1981, end: 1989 },
];

//Get only retail companies

const retailCompanies = companies.filter((company) => company.category === 'retail')
console.log(retailCompanies);

//Get companies >= 1980 <=2005

const earlyCompanies = companies.filter(function (company) {
return company.start >= 1980 && company.end <=2005
})

//OOOORRRR

const earlyCompanies2 = companies.filter(
(company2) => company2.start >= 1980 && company2.end <= 2005
);

console.log(earlyCompanies);

//Get companies that lasted for 10 years or more

const lastingCompanies = companies.filter(function (company) {
return company.end - company.start >= 10

});

//OOORRRR

const lastingCompanies2 = companies.filter((company)=>(company.end - company.start >= 10))
console.log(lastingCompanies);


```
## MAP

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumber = numbers.map((number) => number \* 2);
console.log(doubleNumber);

```

- Same with ForEach

```javascript
const doubleNumber2 = [];
numbers.forEach((number) => {
doubleNumber2.push(number \* 2);
});

console.log(doubleNumber2);

```
```javascript
const companies = [
{ name: "company 1", category: "retail", start: 1981, end: 2004 },
{ name: "company 2", category: "finance", start: 1992, end: 2008 },
{ name: "company 3", category: "retail", start: 1999, end: 2007 },
{ name: "company 4", category: "auto", start: 1989, end: 2010 },
{ name: "company 5", category: "retail", start: 2009, end: 2014 },
{ name: "company 6", category: "tech", start: 1987, end: 2010 },
{ name: "company 7", category: "finance", start: 1986, end: 1996 },
{ name: "company 8", category: "auto", start: 2011, end: 2016 },
{ name: "company 9", category: "tech", start: 1981, end: 1989 },
];

//Create an array of company names

const companyName = companies.map((company) => company.name);

console.log(companyName);

//create an array with company name and category, and return as objects in an array

const companyDetails2 = companies.map((company) => {
return {
name: company.name,
category: company.category,
};
});
console.log(companyDetails2);

//array of low long companies lasted na dtheir names in objects

const companyYears = companies.map((company) => {
return {
name: company.name,
years: company.end - company.start + ' years',
};
})

console.log(companyYears);
```


### chain map methods

```javascript
const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt \* 2);

/Long Version
const squareAndDouble2 = numbers
.map(function (number) {
return Math.sqrt(number);
})
.map(function (sqrt) {
return sqrt \* 2;
})
console.log(squareAndDouble);
console.log(squareAndDouble2);

```

### Chaining Different methods
```javascript
const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number \* 2);

console.log(evenDouble);

```

#### Reduce- reduce your array to a single value

```javascript
const add = array.reduce(function (previousValue or accumulator, CurrentValue) {
return previousValue + currentValue
},initialValue)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulater, currentValue) {
return accumulater + currentValue;
}, 0);

//Shorter version

const sum2 = numbers.reduce((accumulater, currentValue) => accumulater + currentValue, 2)0 is the initail value so it will start with 0 + 1, if its 2 it will start with 2 + 1
console.log(sum);
console.log(sum2);
```

### Using a for loop

```javascript
const sum3 = () => {
let acc = 0;
for (const cur of numbers) {
acc += cur
}
return acc
}

OOORRRR
const sum3 = function (acc = 0, cur) {
for (const cur of numbers) {
acc += cur
}
return acc
};
console.log(sum3());

const cart = [
{id: 1, name:'Milk', price: 130},
{id: 2, name:'Eggs', price: 150},
{id: 3, name:'Salt', price: 100}
]

//Using reduce to get the total of the prices

const cartTotal = cart.reduce(function (acc, product) {
return acc + product.price;
}, 0)
console.log(cartTotal)

```

## Array Mthods Challenge

- Challenge 1

```javascript
const people = [
{
firstName: 'John',
lastName: 'Doe',
email: 'johndoe@gmail.com',
phone: '08019282518',
age:30
},
{
firstName: 'Jane',
lastName: 'Doe',
email: 'janedoe@gmail.com',
phone: '09127925186',
age:25
},
{
firstName: 'Anne',
lastName: 'Uyai',
email: 'anneuyai@gmail.com',
phone: '09018240973',
age:45
},
{
firstName: 'Sara',
lastName: 'Uyai',
email: 'sarauyai@gmail.com',
phone: '08173429758',
age:19
},
{
firstName: 'Jose',
lastName: 'Uyai',
email: 'joseuyai@gmail.com',
phone: '08025197772',
age:23
}
]

return name and email of peole <= 25
const youngPeople = people.filter(function (person) {

     if (person.age <= 25) {
         return [
           { name: person.firstName + person.lastName, email: person.email },
         ];
     }

})

OOORRRR

const youngPeople2 = people
.filter((person) => person.age <= 25)
.map((person) => ({
name: person.firstName + person.lastName,
email: person.email,
}));
console.log(youngPeople);
console.log(youngPeople2);
```
- Challenge 2
  
```javascript

//add all posituve numbers in the arrray

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbers = numbers
.filter((number) => number > 0)
.reduce((acc,cur) => acc + cur,0)

console.log(positiveNumbers);
```
- Challenge 3

```javascript
capitalize the first letter of each string in the array
const words = ['coder', 'programmer', 'developer'];

const capitalizeWords = words
.map((word) => {
return word[0].toUpperCase() + word.substring(1);

     })

console.log(capitalizeWords);
```
## THE DOCUMENT OBJECT MODEL

### intro to DOM

---

```javascript
console.dir(document);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.links[0]);
```

## METHODS

```javascript
document.write('hi from maryanne')

const main = document.getElementById('main');
main.innerHTML = '<h1>hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello'

Shopping List

let output;

output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;

output = document.forms[0].method;
output = document.forms[0].action;

document.forms[0].id = 'new-id'

output = document.links;
output = document.links[0].href;
output = document.links[0].className;
output = document.links[0].classList;

output=document.images[0]
output=document.images[0].src

console.log(output);

```

## DOM SELECTORS

### Get/change content

---

```javascript
document
  .getElementById()
  .setAttribute("attribute you want to set", "what you want it to be");
const title = document.getElementById("title");

console.log(title.textContent);
title.textContent = "Hello";
title.innerHTML = "Hello";
title.innerHTML = "<strong>Shopping List</strong>";
```

### Change styles

---

```javascript
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";
```

### **document.querySelector()**

---

```javascript
console.log(document.querySelector("h1")); //it will only the sirst one on the page
console.log(document.querySelector("app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type=text]"));
console.log(document.querySelector("li:nth-child(2)"));

const secondItem = document.querySelector("li:nth-child(2)");
secondItems.inerText = "Apple Juice";
secondItem.style.color = "red";

//you can use query selector on any element
```

## DOM SELECTORS - Multiple Elements

### **querySelectorAll()**

---

```javascript
listItems.style.color = "blue"; //wont work because youre trying to to change elements in a node list onstead use a for each method

const listItems2 = document.getElementsByClassName("indiItems");
console.log(listItems2);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName("indiItems");

//the below code was initially not working because i put the script tag at the top of my html page so it loaded before the page could even load so i moved it down but hatgpt said its best practice to use the evenlistener wh9ch is below the first code

const listItems = document.querySelectorAll(".indiItems");
console.log(listItems);

document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".indiItems");
  console.log(listItems);
});
```

## TRAVERSING THE DOM

![Local Image](../JAVASCRIPT%20LESSON/images/DOM%20Element%20Relationships.jpg)

```javascript
let output;
const parent = document.querySelector(".parent");
output = parent.children; //children is a property
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two"; //OORRR
parent.children[1].textContent = "Child Two"; //OORRR==
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

//Get parents elements from a child

const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = "blue";
secondItem.previousElementSibling.style.color = "orange";
console.log(output);
```

## Traversing the DOM - All Nodes

![Local Image](../JAVASCRIPT%20LESSON/images/DOM%20Node%20Relationships.jpg)

| Type    | Description              | Children                                                                    |
| ------- | ------------------------ | --------------------------------------------------------------------------- |
| Element | Represents an element    | Element, Text, Comment, ProcessingInstruction, CDATASection, EntityRefernce |
| Attr    | Represents and attribute | Text, EntityRefernce                                                        |

```javascript
let output;

const parent = document.querySelector(".parent");

output = parent.childNodes; //its a property not a method

output = parent.childNodes[0];
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "Hello";

//Parent Node

const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

//Sibling

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling;
output = output.previousSibling;

console.log(output);
```

## _Create and Append Elements_

```javascript
const div = document.createElement("div");

div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "my Element");

//div.innerText = 'Hello World' // not the best way to do things, mostly used to get and edit already existing nodes

const text = document.createTextNode("Hello World");
div.appendChild(text);

document.body.appendChild(div);

document.querySelector("ul").appendChild("div");

console.log(div);
```

## Challenge

### Quick and Dirty

```javascript
function createListItem(item) {
  const btn = document.createElement("button");

  btn.innerHTML = `${item}`;
  btn.className = "indiItems";
  document.querySelector(".items").appendChild(btn);

  //   document.insertBefore(btn, document.querySelector(".clear"));
}
```

### Clear & Performant

```javascript
function createNewItem(item) {
  const btn = document.createElement("button");
  btn.className = "indiItems";
  btn.appendChild(document.createTextNode(item));
  document.querySelector(".items").appendChild(btn);
}

createListItem("eggs");
createNewItem("cheese");
```

## _Insert Elements, Text & Html_

### _insertAdjacentElement_

---

```javascript
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1); //where you want it to insert & the element you want to add
}

insertElement();
```

### _insertAdjacentText_

---

```javascript
function insertText() {
  const item = document.querySelector(".indiItems:first-child");
  item.insertAdjacentText("beforebegin", "insertAdjacentText");
}

insertText();
```

### _insertAdjacentHTML_

---

```javascript
function insertHTML() {
  const clearBtn = document.querySelector(".clear");
  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>");
}

insertHTML();
```

### _insertBefore_

---

```javascript
function insertBeforeItem(item) {
  //first get the parent element and store it in a variable
  const div = document.querySelector(".items");

  //then create a variable that will hold all the info of the element you want to create
  const button = document.createElement("button");
  button.textContent = item;
  button.className = "indiItems";

  //now get the item you want your element to be inserted before inside the parent

  const thirdButton = document.querySelector(".clear");

  //call it on the parent
  div.insertBefore(button, thirdButton);
}

insertBeforeItem("Cheese");
```

## _Custom InsertAfter Function_

```javascript
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

//new element to insert
const button = document.createElement("button");
button.textContent = "hello";
button.className = "indiItems";

//existing element to insert after
const firstItem = document.querySelector(".indiItems:first-child");

//custom function
insertAfter(button, firstItem);
```

## Replace Elements

- replace first item

```javascript
function replaceFirstItem() {
  //item you want to replace
  const firstItem = document.querySelector(".indiItems:first-child");

  //create new elemnt
  const button = document.createElement("button");
  button.textContent = "Replaced First";
  button.className = "indiItems";

  //call it on th item you want to replace
  firstItem.replaceWith(button);
}

replaceFirstItem();
```

- replace second item

```javascript
function replaceSecondItem() {
  const secondItem = document.querySelector(".indiItems:nth-child(2)");

  secondItem.outerHTML =
    '<button type="button" class="indiItems">Replaced Second</button>';
}
replaceSecondItem();
```

- replace all items

```javascript
function replaceAllItems() {
  const buttons = document.querySelectorAll(".indiItems");

  //   buttons.forEach((item, index) => {
  //     if (index === 1) {
  //       item.outerHTML =
  //         '<button type="button" class="indiItems">Second item</button>';
  //     } else {
  //       item.outerHTML =
  //         '<button type="button" class="indiItems">Replace All Items</button>';
  //     }
  //   });

  //using tenary operator
  buttons.forEach((item, index) => {
    item.outerHTML =
      index === 1
        ? '<button type="button" class="indiItems">Second item</button>'
        : '<button type="button" class="indiItems">Replace All Items</button>';
  });

  //selecting parent element and using replaceChild
}
replaceAllItems();
```

- replace child header

```javascript
function replaceChildHeader() {
  const header = document.querySelector(".head");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";
  h2.style.margin = "3rem 1rem 1rem 1rem";
  header.replaceChild(h2, h1); //replace h1 with h2
}
replaceChildHeader();
```

## Remove Elements

```javascript
function removeClear() {
  document.querySelector(".clear").remove();
}
removeClear();
```

### removeChild method

```javascript
function removeFirstItem() {
  const div = document.querySelector(".items");
  const button = document.querySelector(".indiItems:first-child");

  div.removeChild(button);
}
removeFirstItem();
```

### remove specified

- first way

```javascript
function removeItem(itemNumber) {
  const div = document.querySelector(".items");
  const button = document.querySelector(`.indiItems:nth-child(${itemNumber})`);

  div.removeChild(button);
}
removeItem(3);
```

- second way

```javascript
function removeItem2(itemNumber) {
  const div = document.querySelector(".items");
  const button = document.querySelectorAll(".indiItems")[itemNumber - 1]; //-1 will make it not to be zero-based

  div.removeChild(button);
}
removeItem2(2);
```

- third way

```javascript
function removeItem3(itemNumber) {
  const button = document.querySelectorAll(".indiItems");

  button[itemNumber - 1].remove();
}
removeItem3(2);
//shorter way

const removeItem4 = (itemNumber) =>
  document.querySelectorAll(".indiItems")[itemNumber - 1].remove();
removeItem4(3);
```

## Working with Styles

```javascript
//.classList ('gives an array of all the classes')
// .add('class you want to add')
//.remove('class you wnat to remove')
//.toogle('class you want to activate') eg light and dark mode
//.replace('what you want to replace', 'what you're replacing it with')
```

## Events

![Local Image](../JAVASCRIPT%20LESSON/images/Events.JPG)

## Event Listeners

- not recomended - to put the listener in the html file eg onclick=""

- second way: use a javascript event listener

```javascript
const clearBtn = document.querySelector(".clear");

clearBtn.onclick = function () {
  alert("clear items");
};
```

- add event listener
- element.addEventListener('action to be performed','callback function')

```javascript
clearBtn.addEventListener("click", function () {
  alert("clear items");
});

//turn into arrow function

clearBtn.addEventListener("click", () => alert("clear item"));
```

# NOT TRAVERSY MEDIA TUTORIAL
## CLASSES
<p> Classes are used to create one or more objects</p>
<p> you can define the instance properties</p>
<p> Instance properties: what they have</p>
- name<br>
- age<br>
- height

<p> Instance methods:what they do </p>
- talk<br>
- run<br>
- jump

```javascript
class Rectangle {
  //class definition
  //every class has a constructor that is a method and is run only once when the object is being created
  //it's used to set up your object
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color; //(this) keyword is referring to the current object that is being used
  }

  //instance methods
  rectangleArea() {
    let area = (this.width * this.height) / 2;
    return area;
  }

  printDescription() {
    // console.log(
    //   `I am a rectangle of ${this.width} width and ${this.height} height`
    // );
  }
}

let myRectangle = new Rectangle(5, 3, "blue"); //to run the constructor

myRectangle.rectangleArea(); //this is how you use the class and it's methods
myRectangle.printDescription();


```

### Getters and Setters
<p>they're sued to define methods on a class and used as properties</p>

```javascript
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequests = 0;
  }

  //create a getter for the area
  get area() {
    this.numOfRequests++;
    return this.width * this.height;
  }

  //a setter can assign new values to your instance properties same as getter

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let mySquare = new Square(25);

mySquare.area = 25;
// console.log(mySquare.width);
// console.log(mySquare.height);

// console.log(mySquare.area);
// console.log(mySquare.area);
// console.log(mySquare.area);
// console.log(mySquare.area);
// console.log(mySquare.numOfRequests);

```


### Static Methods

<p>its a method defined on a class but its not part of the...........</p>
<p>basically they dont require that you create a new instance of the class</p>
<p>you can call it directly like mySquare.area without creating an instance  for your class</p>


```javascript
class Triangle {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  //static method
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }
}

let triangle1 = new Triangle(4);
let triangle2 = new Triangle(5);

console.log(Triangle.equals(triangle1, triangle2));

```

### Inheritance & Extends
#### Parents and Child Class


```javascript
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`i am ${this.name} and i am ${this.age}`);
  }

  
}

//child class
class Programmer extends Person {
  //extends basically indicates that this programmer class is an extension of the person class
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age); //the super keyword just collects the information from the parent class

    //custom behaviour
    this._yearsOfExperience = _yearsOfExperience;
  }
  code() {
    console.log(`${this.name} is coding`);
  }
}

const Programmers = [
  new Programmer("anne", 21, 1),
  new Programmer("uyai", 23, 12)
];

function developSoftware(programmers) {
  //develop software
  for (let programmer of programmers) {
 
    programmer.code();
  }
}

 developSoftware(Programmers)

```
## Polymorphism
 
<p>it's the act of redefining a method inside a derived child class...it's basically overriding methods</p>


```javascript
class Animal{
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    super.makeSound(); ///this is calling the parent make sound and it's own makesound method
    console.log(`generic animal sound`);
  }
}


class Dog extends Animal { 
  constructor(name) {
    super(name);

  }

  makeSound() {
    console.log('woof woof');
  }
}

const a1 = new Animal('dog');
a1.makeSound();

const a2 = new Dog('jeff');
a2.makeSound();
```