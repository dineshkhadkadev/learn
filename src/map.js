const users = [
    { firstName: "surya", age: 23 },
    { firstName: "harshit", age: 23 },
    { firstName: "dinesh", age: 24 },
]
const userName = users.map((user) => {
    return user.firstName;
});
console.log(userName);