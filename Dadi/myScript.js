// memorizziamo e generiamo i tiri random tra 1 - 6
/* Math.random() * (6 - 1) mi permette di ottenere un numero tra 0-6 decimale,
    +1 per includere l'estremo inferiore nell'intervallo, Math.floor
    arrotonda all'intero inferiore.

    Credit MDN :)
*/
var tiroUtente = Math.round(Math.random() * (6 - 1) + 1);
console.log(tiroUtente);

var tiroComputer = Math.round(Math.random() * (6 - 1) + 1);
console.log(tiroComputer)

/*
compariamo gli eventuali casi e determiniamo il vincitore
possiamo avere un pareggio
facciamo sapere chi ha vinto nella pagina e console
*/

// vince il computer
if (tiroComputer > tiroUtente) {
    console.log("il vincitore è il Computer con lo strardinario punteggi di: " + tiroComputer);
    document.getElementById("myH1").innerHTML = "il vincitore è il Computer con lo strardinario punteggi di: " + tiroComputer;

//vince l'utente 
} else if (tiroUtente > tiroComputer) {
    console.log("il vincitore è l'Utente con lo strardinario punteggi di: " + tiroUtente);
    document.getElementById("myH1").innerHTML = "il vincitore è l'Utente con lo strardinario punteggi di: " + tiroUtente;

} else {
// pareggio
console.log("pareggio tra uomo e macchina");
document.getElementById("myH1").innerHTML = "il " + tiroUtente +" sancisce il pareggio tra uomo e macchina";
}





