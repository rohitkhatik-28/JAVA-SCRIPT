/*-----------------OBJECTS--------------------------*/
// SINGELTONE
// OBJECT LITERALS

const sym = Symbol("k1");

const myObj = {
    name : "Rohit",
    age : 20,
    "Address" : "Udaipur",
    email : "rohitkhatik@gmail.com",

    [sym]: "symbolll",
}

// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj["Address"]);
// console.log(myObj["email"]);


// console.log(myObj[sym]);
// console.log(typeof(myObj[sym]));
// console.log("------------------------");
// console.log(sym);
// console.log(typeof(sym));

myObj.email = "rohitkhatik@google.com";
//Object.freeze(myObj);
myObj.email = "rohitkhatik@microsoft.com";

// console.log(myObj);

myObj.greeting = function(){
    console.log("Hello JS User ");
}
myObj.greetingTwo = function(){
    console.log(`Hello Js User : ${this.name}`);
}

console.log(myObj.greeting);
console.log(myObj.greeting());
console.log(myObj.greetingTwo());
