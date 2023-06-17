// store methods in object
const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years`;
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user1 = createUser("surya", "majhi", "suryamajhi@gmail.com", 24, "dipayal doti");
console.log(user1.about());