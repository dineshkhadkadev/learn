function about(hobby, favSinger) {
    console.log(this.firstName, this.age, hobby, favSinger)
}
const user1 = {
    firstName: "surya",
    age: 24,
}
const user2 = {
    firstName: "dinesh",
    age: 25
}
const func = about.bind(user1, "reading", "Adele");
func();