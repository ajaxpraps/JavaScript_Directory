//  it is for javascipts object


// there are two ways to declare a objects in js
// 1. literal way  --> multiple instances ban jate hai
// 2. constructor way  --> singleton object banta hai only one instacnce  using object.Create();


//  object literals

const user = {
    // here the name is seen by javascipt is "name", so we can also write it as "name":"ajay Prajapti";
    name : "ajay prajapati",
    "branch":"cse",
    age:18,
}

// accessing the object properties
 
console.log(user.name);
console.log(user["name"]);
console.log(user.branch);

// updating value in objects
user.branch = "elec";

// locking the change in object;
// Object.freeze(user);

// making function in objects

user.greeting = () =>{
     console.log(`hello.. ${this.name}`)
}

console.log(user.greeting());


// using constructor

const tinder = new Object();
tinder.name = "ajay";
tinder.class = "elite";
// console.log(tinder);
console.log(Object.keys(tinder))  // important
console.log(Object.values(tinder)); // important    

// you can do nesting of object as well

const nestedObj = {
     name: "ajay",
     data:{
        firstName: "ajay",
        secondName:"prince",
     }
}

// const obj1 = {1:"a",2:"b"};
// const obj2 = {2:"c",4:"d"};
// const obj3 =  {5:"e",6:"f"};

// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

// object destructuring

// const course = {
//     courseName : "javascript",
//     price : "4566",
//     instructor: "vivek",
// }

// const {courseName:courseKaNaam} = course;
// console.log(courseKaNaam);