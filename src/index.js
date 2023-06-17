/*const user1 = {
    firsName: "surya",
    lastName: "majhi",
    age: 24,
    email: "khadkad719@gmail.com",
    address: "House Number,Colony,pincode,statwe",
    about: function () {
        return `${this.firsName} is ${this.age} years`;
    },
    is18: function () {
        return this.age >= 18;
    }

}*/
//1. function (that function create object)
//2. add key value pair
//3. object lai return garne x
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years`;
    };
    user.is18 = function () {
        return this.age >= 18;
    };
    return user;
}
const user1 = createUser("surya", "majhi", "suryamajhi@gmail.com", 24, "Dipayal Doti");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const aboutUser = user1.about();
console.log(aboutUser);
