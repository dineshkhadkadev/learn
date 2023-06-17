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
    // Dog is sum-class or derive class
    // Animal is parent class or base class

}
const puppy = new Dog("puppy", 4);
const isSuperCute = puppy.isSuperCute();
console.log(isSuperCute);