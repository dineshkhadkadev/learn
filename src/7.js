const userMethods = {
    sing: function () {
        return 'steal my girl';
    },
    about: function () {
        return ` my name is${this.firstName} and age is ${this.age}`;
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
    user.sing = userMethods.sing;
    return user;
}
const user1 = createUser('dinesh', 'khadka', 25, 'khadkad719@gmail.coom', 9860633796, 'kanchanpur');
console.log(user1);
const about = user1.about();
console.log(about);