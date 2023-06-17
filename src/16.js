// same method in base class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is running ${this.speed} kmph`;
    }
    eat() {
        return `modified eat : ${this.name} is eating;`
    }
}
const puppy = new Dog("puppy", 3, 45);
console.log(puppy.eat());
console.log(puppy);
