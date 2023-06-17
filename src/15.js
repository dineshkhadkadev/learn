// super keyword
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
        return `${this.name} is running at ${this.speed} kmph`;
    }
    // Dog is sum-class or derive class
    // Animal is parent class or base class

}
const puppy = new Dog("puppy", 4, 45);
console.log(puppy);
console.log(puppy.run());
// object ==> instance
