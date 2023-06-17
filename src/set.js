// sete(it is iterable)
//store data
// sets also have its own methods
// no index-based access 
//order is not guaranteed
// unique items only (no duplicate allowed
//const items = ['item1', 'item2', 'item3'];
//const numbers = new Set();
//numbers.add(1);
//numbers.add(2);
//numbers.add(3);
//numbers.add(4);
//numbers.add(items);
//numbers.add(['item1', 'item2']);
//numbers.add(['item1', 'item2']);
//if (numbers.has('item2')) {
//console.log("item2 is present");
//} else {
//console.log("item2 is not present");
//}

//for (let num of numbers) {
//  console.log(num);
const myArray = [1, 2, 3, 4, 5, 3, 6, 7, 4, 8];
const uniqueElements = new Set(myArray);
let length = 0;
for (let element of uniqueElements) {
    length++;
}
console.log(uniqueElements);
console.log(length);