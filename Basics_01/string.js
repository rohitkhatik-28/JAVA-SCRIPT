const name = "rohit";
const age = 20;

// console.log(name + age + " RollNo - 52");

//console.log(`hello my name is ${name} and my age is ${age} and Roll No. - 52` );

const newname = new String(" Rohit ");

// console.log(newname);

// console.log(newname.__proto__);

// console.log(newname.charAt(5));
// console.log(newname.indexOf('R'));
// console.log(newname.length);


// console.log(newname[3]);
// console.log(newname.toUpperCase());
// console.log(newname.toLowerCase());


const newstring = name.substring(0,3);

// console.log(newstring);
// In slice also include negative values;
const anotherstring = name.slice(-1, 2);

//console.log(anotherstring);

const newst = "  ROHit   ";

// console.log(newst);
// trim is use for remove the space ;
// console.log(newst.trim());

const url = "https://rohit.com/rohit%20khatik";

// console.log(url);
// console.log(url.replace('%20','-'));

// includes is use for check string is exist or not!
// console.log(url.includes('rohit'));
// console.log(url.includes('moc'));

const st = "R-O-H-it";

console.log(st.split('-'));
console.log(st.split('-', 3));
