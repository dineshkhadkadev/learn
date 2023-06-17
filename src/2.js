const user = {
    firstName: "harshit",
    lastName: " khadka",
    email: "khadka719@gmail.com",
    age: 24,
    address: "doti, dipayal",
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;

    }
}
const aboutUser = user.about();
console.log(aboutUser);
console.log(user);