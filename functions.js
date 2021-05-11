// input -> gor nagot med input -> returnar ett output

// klassiska sattet att definera en funktion
function hej(name, age) {
    console.log("hejsan!" + name);
    console.log(age);
}

//hej('Sebastian', 42);

// Det lite mer "nya" funktionella sattet att definera en funktion.
const doSomething = (x) => console.log("Hello from doSomething." + x);

//doSomething(1337);

const doSomethingElse = () => {
    console.log(123);
    console.log("Tjena!");
}

//doSomethingElse();







// en funktion som returnerar nagot
function multiply(x, y) {
    const result = x * y;

    return result;
}

const tjabba = multiply(6, 2); // 12

//console.log(tjabba); // 12

// en arrow funktion som returnerar nagot

// en arrow function utan masvingar "{", "}", returnerar alltid sitt resultat
const multiply2 = (x, y) => x * y;

const tjabba2 = multiply2(20, 2); // 40

//console.log(tjabba2); // 40

// en arrow function med masvingar "{", "}", behover "return".
const multiply3 = (x, y) => {
    return x * y;
}

const tjabba3 = multiply3(40, 2); // 80
//console.log(tjabba3); // 80























// Skriv av detta, prova att kor koden.
// Nar ni ser 5 och 150 sa racker ni upp handen.

function division(x, y) {
    return x / y;
}

const add = (x, y) => x + y;

// med masvingar
const add2 = (x, y) => {
    return x + y;
}

const result1 = division(10, 2);
const result2 = add(100, 50);

console.log(result1);
console.log(result2);