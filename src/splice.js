// delete
const myArray = ['item1', 'item2', 'item3'];
const deletedItem = myArray.splice(1, 1);
console.log(myArray);
console.log(deletedItem);
//insert
myArray.splice(2, 0, 'newItem');
console.log(myArray);
// insert and delete
const deleted = myArray.splice(1, 2, 'newItem1', 'newItem2');
console.log(myArray);
console.log(deleted);
