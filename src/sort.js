const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 2, productName: "p2", price: 400 },
    { productId: 3, productName: "p3", price: 3000 },
    { productId: 4, productName: "p4", price: 100 }
]
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
const highToLow = products.sort((a, b) => {
    return b.price - a.price;
});
console.log(highToLow);