const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 15000 },
]
const totalAmount = userCart.reduce((tatolPrice, currentProduct) => {
    return tatolPrice + currentProduct.price;
}, 0);
console.log(totalAmount);
