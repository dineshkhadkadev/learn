const users = [
    { userId: 1, userName: "surya" },
    { userId: 2, userName: "harshit" },
    { userId: 3, userName: "didi" },
]
const myuser = users.find(user => user.userName === "surya");
console.log(myuser);