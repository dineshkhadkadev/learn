// what is prototype
// javaScript function ===> function + object
function hello() {
    console.log("hello world");
}

//console.log(hello.name);
//we can add our own properties
//hello.myOwnProperty = "very unique value"
//console.log(hello.myOwnProperty);
// name property ----> tells function name;
// function provides more usefull properties
// console.log(hello.prototype); ===> {} ===> object
// only function provide prototype property
/*if (hello.prototype) {
    console.log("prototype is present");
} else {
    console.log("prototype is not present");
}*/
hello.prototype.key1 = "value1";
hello.prototype.sing = function () {
    return "steal my girl";
}
console.log(hello.prototype.key1);
console.log(hello.prototype.sing());