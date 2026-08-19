const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const temp = 20.856;

// console.log(temp.toPrecision(2));

 const values = 10000000;

// console.log(values.toLocaleString());// amrican standard commas
// console.log(values.toLocaleString('en-IN')); // indian standard commas

// +++++++++++++++++++++++++++++--MATHS--++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-89));
console.log(Math.round(5.8));
console.log(Math.ceil(5.4));
console.log(Math.floor(5.8));

console.log(Math.min(5.8,2,8,2,7,10));
console.log(Math.max(5.8,2,8,2,7,10));


console.log(Math.random());

console.log((Math.random())*10 +1);
console.log(Math.floor((Math.random())*10 +1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * 10 + (max-min+1)) + min)