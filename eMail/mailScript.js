// chiedo l'email all'utente
var emailUtente = prompt("inserire la propria email");
console.log(emailUtente);
// controllo se l'email è valida?

// controllo che sia nella lista degli autorizzati
autorizzati = ["gino.prova@boolean.com", "franzo.prova@boolean.com", "pippo.prova@boolean.com"];

// variabile per controllare la presenza nella lista
var auth = false;

// l'email può essere presente o no
// scannerizzo l'intero array
for (var i = 0; i < autorizzati.length; i++) {
    // controllo se l'email è contenuto nell'array
    if (emailUtente === autorizzati[i]) {
        auth = true;
    }
}

// stampo l'output
if (auth) {
    console.log("l'email " + emailUtente + " è autorizzata");
    document.getElementById("myH1").innerHTML = "l'email " + emailUtente + " è autorizzata";
} else {
    console.log("ACCESS DENIED");
    document.getElementById("myH1").innerHTML = "ACCESS DENIED";
}
