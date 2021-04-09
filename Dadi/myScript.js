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

//compariamo gli eventuali casi e determiniamo il vincitore

//facciamo sapere chi ha vinto 





