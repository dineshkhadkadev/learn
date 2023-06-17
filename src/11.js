function CreateUser(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old `;
}
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return 'steal my girl';
}
const user1 = new CreateUser('dinesh', 'khadka', 25, 'khadkad719@gmail.com', 'Nepal');
console.log(user1);
const sing = user1.sing();
console.log(sing);
