// class keyword
function CreateUser(firstName, lastname, age, email, address) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.address = address;
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return "steal my gilrl";
}
const user1 = new CreateUser("dinesh", "khadka", 25, "khadkad719@gmail.com", "Nepal");
const about = user1.about();
const is18 = user1.is18();
const sing = user1.sing();
console.log(user1);
console.log(about);
console.log(is18);
console.log(sing);

