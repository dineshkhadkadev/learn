// static methods and properties
class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return 'this is persi=on'
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new person("dinesh", "khadka", 25);
person1.fullName = "dinesh khadka";
console.log(person1.fullName);

