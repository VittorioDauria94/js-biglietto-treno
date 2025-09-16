// Esercizio 1

// let message = "";
// let result = 0;
// const num1Str = prompt("Scegli il primo numero");
// const num2Str = prompt("Scegli il secondo numero");
// const userChoise = prompt("Scrivi se vuoi la somma o la differenza dei due numeri");

// const num1 = parseInt(num1Str);
// const num2 = parseInt(num2Str);


// if (isNaN(num1) || isNaN(num2)) {
//     message = `Errore: inserisci solo numeri validi, ricarica la pagina.`;
// } else {
//     if (userChoise === "somma") {
//         result = num1 + num2;
//         message = `La somma dei due numeri è ${result}`;
//     } else if (userChoise === "differenza") {
//         result = num1 - num2;
//         message = `La differenza dei due numeri è ${result}`;
//     } else {
//         message = "Errore: scrivere correttamente se si vuole la somma o la differenza, ricarica la pagina.";
//     }
// }

// console.log(message);


// Esercizio 2

// let message = "";
// let yearOfBirth = 0;
// const userAgeStr = prompt("Quanti anni hai?");
// const currentYear = new Date().getFullYear();

// const userAge = parseInt(userAgeStr);

// if (isNaN(userAge)) {
//     message = `Errore: inserisci correttamente la tua età numericamente, ricarica la pagina.`;
// } else {
//     yearOfBirth = currentYear - userAge;
//     message = `Sei nato/a nel ${yearOfBirth}`;
// }

// console.log(message);

//Esercizio 3

// const userName = prompt("Come ti chiami?");
// let message = "";

// if (userName === "" || !isNaN(userName)) {
//     message = "Errore: scrivi correttamente il tuo nome, ricarica la pagina.";
// } else {
//     message = `Ciao ${userName}`;
// }
// console.log(message);

//Esercizio 4

let message = "";
const userName = prompt("Qual'è il tuo nome?");
const userSurname = prompt("Qual'è il tuo cognome?");
const userColor = prompt("Qual'è il tuo colore preferito?");

if (userName === "" || userSurname === "" || userColor === "" || !isNaN(userName) || !isNaN(userSurname) || !isNaN(userColor)) {
    message = "Errore: non hai risposto correttamente ad almeno una domanda, ricarica la pagina.";
} else {
    message = `${userName}${userSurname}${userColor}23`.toLowerCase();
}

console.log(message);
