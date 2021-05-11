// Skriv av detta, kor koden och rack upp handen nar det
// fungerar for dig.

const person = {
    speak: function() {
        console.log("My name is John Doe!");
    },
    firstname: "John",
    lastname: "doe",
    pet: {
        type: "dog",
        name: "Boo",
        speak: function() {
            console.log("Woof woof!");
        },
        getFood: function () {
            return { type: "bone" };
        }
    }
};

console.log(person.pet.getFood().type);

/*console.log(person.pet.name);
console.log(person.pet);
console.log(person.pet.type);
person.pet.speak();*/

/*
person.speak();

console.log(person.firstname);
console.log(person.lastname);
*/

/*console.log(person);

person.firstname = "Anna";

console.log(person);*/