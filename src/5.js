const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
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
const user1 = createUser("dinesh", "khadka", 25, "khadkad719@gmail.com", 9824618093, "Nepal");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const aboutUser = user1.about();
console.log(aboutUser);