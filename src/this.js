const hello = () => {
    "use strict"
    console.log(this);
}
hello.call();