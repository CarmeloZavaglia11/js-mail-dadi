// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mailUtente = prompt('Salve, inserisca l\'email per effettuare il controllo:');
var mails = ['francescoz@gmail.com', 'flaviorenna@hotmail.it', 'luigipira84@yahoo.it', 'federicorusso99@gmail.com', 'ferdinandoarago@gmail.com'];
var testaccesso = false;

for (i = 0; i < mails.length; i++) {
    if (mails[i] == mailUtente) {
        testaccesso = true;
        break;
    }
}

if (testaccesso == true) {
    alert('Accesso Consentito');
} else {
    alert('Accesso Negato');
}
