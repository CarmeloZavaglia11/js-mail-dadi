// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mails = ['francescoz@gmail.com', 'flaviorenna@hotmail.it', 'luigipira84@yahoo.it', 'federicorusso99@gmail.com', 'ferdinandoarago@gmail.com'];

function check() {
    var mailUtente = document.getElementById('email').value;
    var testAccesso = false;

    if (mailUtente == '') {
        alert('Non lasciare il campo vuoto');
        return;
    }

    for (i = 0; i < mails.length; i++) {
        if (mails[i] == mailUtente) {
            testAccesso = true;
        }
    }

    if (testAccesso) {
        alert('Accesso Consentito');
    } else {
        alert('Accesso Negato');
    }
}
