const user1 = {
    firstName: "dinesh",
    age: 24,
    about: function () {
        console.log(`my name is ${this.firstName} and age is ${this.age}`);
    }
}
const user2 = {
    firstName: "surya",
    age: 24,
}
user2.about(user1);