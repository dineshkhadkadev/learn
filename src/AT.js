// arrow function and this
const user = {
    firstName: "surya",
    age: 24,
    about: () => {
        console.log(this.firstName, this.age,);
    }
}
user.about();