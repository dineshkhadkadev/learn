const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    },
    hello: function () {
        return "steal my girl";
    }
}

function createUser(firstName, lastName, age, email, mobile_no, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.mobile_no = mobile_no;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}
const sing = user1.sing();
console.log(sing);
