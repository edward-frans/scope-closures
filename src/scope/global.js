var hello = "Hello";
var hello = "Hello +";
let world = "Hello world";
let world = "Hello";
const helloWorld = "Hello world";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = "Im global"
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = "Im global";
}

anotherFunction();
console.log(globalVar);