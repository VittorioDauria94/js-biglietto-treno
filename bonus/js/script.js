// Esercizio 1

let message = "";
let result = 0;
const num1Str = prompt("Scegli il primo numero");
const num2Str = prompt("Scegli il secondo numero");
const userChoise = prompt("Scrivi se vuoi la somma o la differenza dei due numeri");

const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);


if (isNaN(num1) || isNaN(num2)) {
    message = `Errore: inserisci solo numeri validi, ricarica la pagina.`;
} else {
    if (userChoise === "somma") {
        result = num1 + num2;
        message = `La somma dei due numeri è ${result}`;
    } else if (userChoise === "differenza") {
        result = num1 - num2;
        message = `La differenza dei due numeri è ${result}`;
    } else {
        message = "Errore: scrivere correttamente se si vuole la somma o la differenza, ricarica la pagina.";
    }
}

console.log(message);
