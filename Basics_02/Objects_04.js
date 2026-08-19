const tinder = new Object()

// console.log(tinder);

tinder.id = 123124124;
tinder.name = "rk";
tinder.age = 20;

// console.log(tinder)

const regularObj = {
    email: "rohitkhatik@gpt.com",
    name: {
        fullname: {
            firstname: "rohit",
            lastname: "khatik",
        }
    }
}

// console.log(regularObj.name.fullname.firstname);
// console.log(regularObj.name.fullname);
// console.log(regularObj.name);
// console.log(regularObj);

const obj1 = {
    1: "a",
    2: "b",
    3: "c",
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f",
}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

const arrObj = [

    {
        id: 1,
        email: "fgdfggggr",
    },
    {
        id: 2,
        email: "heruewyriro",
    },
    {
        id: 3,
        email: "iefhsljhvfsldfh",
    }
]

// console.log(arrObj[0].email);

// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty("id"));
// console.log(tinder.hasOwnProperty("i"));




const course = {
    courseInst: "rohit",
    courseprice: "999",
    time: "10hr",
}

console.log(course.courseInst); // rohit

const { courseInst } = course; // use the name for multiple time

console.log(courseInst); //rohit

const { courseInst: CI } = course; // replace the name in short form for

console.log(CI); //  rohit

