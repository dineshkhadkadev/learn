/*const numbers = [2, 4, 6, 8, 10];
const evens = numbers.every((num) => {
    return num % 2 === 0;
})
console.log(evens);*/
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 15000 },
];
const lessThan = userCart.every((product) => {
    return product.price < 30000;
});
console.log(lessThan);