/* Ragionamento
* RACCOLTA DATI
* - chiedere il numero di chilometri da percorrere
* - chiedere l'età del passeggero
* - creare la variabile del messaggio
* - creare la variabile costo biglietto per chilometro
* - creare la variabile sconto minorenni in decimali
* - creare la variabile sconto over 65 in decimali
* - creare la variabile prezzo biglietto finale con valore 0
* LOGICA
* trasformare la stringa del prompt età in numero
* trasformare la stringa del prompt chilometri in numero
* SE età del passeggero è > 65
*    prezzo biglietto = (numero chilometri * costo biglietto per chilometro) * sconto over 65
* ALTRIMENTI SE età del passeggero >= 18
*   prezzo biglietto finale = numero chilometri * costo biglietto per chilometro
* altrimenti
*   prezzo biglietto finale = (numero chilometri * costo biglietto per chilometro) * sconto minorenni
*  STAMPA
*   messaggio = il tuo biglietto costerà € (prezzo biglietto finale)  
*/

const userAgeStr = prompt("Quanti hanni hai?");
const distanceStr = prompt("Quanti chilometri devi percorrere");
const priceKm = 0.21;
const discountUnderage = 0.20;
const discountOver65 = 0.40;
let ticketPrice = 0;
let message = "";

const userAge = parseInt(userAgeStr);
const distance = parseInt(distanceStr);

if (userAge > 65) {
    ticketPrice = (distance * priceKm) * (1 - discountOver65);
    message = `Il costo finale del bigliettò sarà € ${ticketPrice.toFixed(2)}`;
} else if (userAge >= 18) {
    ticketPrice = distance * priceKm;
    message = `Il costo finale del bigliettò sarà € ${ticketPrice.toFixed(2)}`;
} else {
    ticketPrice = (distance * priceKm) * (1 - discountUnderage);
    message = `Il costo finale del bigliettò sarà € ${ticketPrice.toFixed(2)}`;
}

console.log(message);
