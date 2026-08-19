const marvel_heros = ["thor", "ironman", "spiderman"];

const dc_heros = ["batman", "superman", "flash"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

marvel_heros.concat(dc_heros);
 //console.log(marvel_heros);
 //console.log(marvel_heros[3][0]);

const allheros = marvel_heros.concat(dc_heros);
//console.log(allheros);

const all_heros = [...marvel_heros, ...dc_heros];

// console.log(all_heros);

const newarray = [1,5,2,3,[1,2,2],5,8,9,[4,5,8,[7,0,0,4],4,5,],7,0,2];

const real_array = newarray.flat(Infinity);

// console.log(real_array);

// console.log(Array.isArray("Rohit"));
// console.log(Array.from("Rohit"));

// console.log(Array.from({name : "Rohit"}));

const s1 = 10;
const s2 = 20;
const s3 = 30;

// console.log(Array.of(s1,s2,s3));