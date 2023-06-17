/*const user1 = {
    firstName: "surys",
    age: 24,
    about: function () {
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName: "dinesh",
    age: 25,
}
user1.about.call(user2);*/
/*
const user1 = {
    firstName: "surya",
    age: 24,
    about: function (hobby, favSiger) {
        console.log(this.firstName, this.age, hobby, favSiger);
    }
}
const user2 = {
    firstName: "dinesh",
    age: 25,
}
user1.about.call(user2, "reading", "Adele");*/

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
about.call(user1, "reading", "Adele");