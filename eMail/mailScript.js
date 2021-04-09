// chiedo l'email all'utente
var emailUtente = prompt("inserire la propria email");
console.log(emailUtente);

// controllo che sia nella lista degli autorizzati
autorizzati = ["gino.prova@boolean.com", "franzo.prova@boolean.com"];

// variabile per controllare la presenza nella lista
var auth = false;

// l'email può essere presente o no
for (var i = 0; i < autorizzati.length; i++) {
    if (emailUtente === autorizzati[i]) {
        auth = true;
        console.log("l'email " + emailUtente + " è autorizzata");
    } else {
        console.log("ACCESS DENIED");
    }
}    

// stampo l'output