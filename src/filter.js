const numbers = [2, 3, 4, 5, 6, 7];

const even = (num) => {
    return num % 2 === 0;
}
const evenNum = numbers.filter(even);
console.log(evenNum);