//  Premitivi (Call by Value) :
//   7 Types : string, Number, Boolean, Null, undefined, 
//             Symbol, BigInt

const name = "rohit";
const values = 100.156;
const temp = null;
const isloggedIn = false;
let age;

const val1 = Symbol(124);
const val2 = Symbol(124);

// console.log(val1 === val2);


// Non Premitive (Call by Reference):

//- Array, Objects, Functions etc.

const arr = ["hii", "hello", "Bye"]; // array

let myObj = { // Object

    name: "Rohit",
    age: 20 
}

const myfunction = function(){ // function
    console.log("hello World");
    console.log(myObj.name);
    console.log(myObj.age);

}

// console.log(typeof myfunction);
// console.log(typeof arr);
// console.log(typeof myObj);
// console.log(typeof temp);
// console.log(typeof val1);
// console.log(myfunction())


// ================================================================

// stack , Heap (basics)

//------------------Stack

let firstName = "Raju";
let secondName = firstName;
secondName = "Ramu";

// console.log(firstName);
// console.log(secondName);

//--------------Heap

let userOne = {
    email: "rohit@gmail.com",
    upi: "rohit28"
}
console.log(userOne.email);

let userTwo = userOne;

userTwo.email = "rohitkhatik@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);