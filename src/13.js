// 2015
//class keyword
// class are fake
class CreateUser {
    constructor(firstName, lastname, age, email, address) {
        console.log("constructor called");
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "steal my gilrl";
    }
    func(a) {
        console.log(a);
    }
}

const user1 = new CreateUser("dinesh", "khadka", 25, "khadkad719@gmail.com", "Nepal");
const about = user1.about();
const is18 = user1.is18();
const sing = user1.sing();
console.log(user1);
console.log(about);
console.log(is18);
console.log(sing);
console.log(user1.about());
console.log(Object.getPrototypeOf(user1));
user1.func("dinesh is a kind and gental person");

