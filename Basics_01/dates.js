//-------------Dates--------------------

let mydate = new Date();

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleTimeString());

// console.log(typeof mydate);

// let createmydate = new Date(12,0,3);
let createmydate = new Date(12,0,3,4,3,8);
// console.log(createmydate);
// console.log(createmydate.toDateString());
//console.log(createmydate.toLocaleString());

// let createdate = new Date ("2026-05-14");
let createdate = new Date ("01-15-2022");
//console.log(createdate.toLocaleString());


let mytimestamp = Date.now();

// console.log(mytimestamp);
// console.log(createdate.getTime());

// console.log(Math.floor(Date.now()/1000));

let dates = new Date();

// console.log(dates);
// console.log(dates.getMonth() + 1);
// console.log(dates.getDay());
// console.log(dates.getFullYear());

dates.toLocaleString('default' , {weakday: "Long"});