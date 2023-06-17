// object literal
// key -> string
//key -> symbol
// map object stores key value pair 
const person1 = {
    id: 1,
    firstName: 'dinesh'
}
const userInfo = new Map();
userInfo.set(person1, { age: 24, gender: 'male' });
console.log(userInfo);
console.log(person1.id);
console.log(userInfo.get(person1).age);
