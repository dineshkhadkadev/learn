/*in which we can apply 'for of loop' we 
call them iterable and string and array are iterable */
const firstName = "dinesh";
for (let name of firstName) {
    console.log(name);
};
const array = ['item1', 'item2', 'item3'];
for (let item of array) {
    console.log(item);
}