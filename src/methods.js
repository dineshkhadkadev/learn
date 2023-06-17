// methods is the  function of inside the object
function personInfo() {
    console.log(`my is name is ${this.firstName} and age is ${this.age}`)
};
const person1 = {
    firstName: "dinesh",
    age: 25,
    about: personInfo,
}
const person2 = {
    firstName: "surya",
    age: 25,
    about: personInfo
}
const person3 = {
    firstName: "harshit",
    age: 24,
    about: personInfo,
}
person1.about();
person2.about();
person3.about();