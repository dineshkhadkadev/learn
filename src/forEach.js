const users = [
    { firstName: "surya", age: 23 },
    { firstName: "harshit", age: 23 },
    { firstName: "dinesh", age: 24 },
]
users.forEach((user) => {
    console.log(user.firstName);
});
for (let user of users) {
    console.log(user.firstName);
}
for (let user in users) {
    console.log(users[user]);
}
