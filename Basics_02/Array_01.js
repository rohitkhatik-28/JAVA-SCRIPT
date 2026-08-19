// Arrray

const myarray = [1,2,3,4,5,6];

const myarrs = ["hii", "hello", "hii"];

const myarr1 = new Array(1,4,51,3,26,5);

// console.log(myarray[5]);
// console.log(myarrs[2]);
// console.log(myarr1[4]);

// -----------------Array method------------

myarray.push(7); 
myarray.push(8);
myarray.pop();

// console.log(myarray);

myarray.unshift(4);
myarray.unshift(12);

// console.log(myarray);

myarray.shift();
// console.log(myarray);

// console.log(myarray.includes(5));
// console.log(myarray.indexOf(5));

const newarr = myarray.join(); // its convert in string

// console.log(newarr);
// console.log(myarray);

// Slice , Splice;
const arr = [1,2,3,4,5,6,7,8,];
// console.log('A' , arr);

const myn1 = arr.slice(1,3);
console.log(myn1);

// console.log("B", arr);

const myn2 = arr.splice(1,3);
 //console.log("C", arr);
 console.log(myn2);
