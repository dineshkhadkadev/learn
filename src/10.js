// prototype

function createUser(firstName, lastName, age, email, mobile_no, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.mobile_no = mobile_no;
    user.address = address;
    return user;
}
createUser.prototype.about = function () {
    return ` my name is ${this.firstName} and my age is ${this.age}`;
},
    createUser.prototype.is18 = function () {
        return this.age >= 18;
    },
    createUser.prototype.sing = function () {
        return 'steal my girl';
    }

const user1 = createUser('dinesh', 'khadka', 25, 'khadkad719@gmail.coom', 9860633796, 'kanchanpur');
console.log(user1);
const about = user1.about();
console.log(about);
const is18 = user1.is18();
console.log(is18);
