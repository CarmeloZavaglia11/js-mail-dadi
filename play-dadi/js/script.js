// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var giocatore = prompt('Prima di iniziare il gioco vorrei sapere il tuo nome');
if (giocatore == "") {
    document.getElementById('giocatore').innerHTML = 'Giocatore Uno';
} else {
    document.getElementById('giocatore').innerHTML = giocatore;
}

// FUNZIONE GENERA ORA
function generaOra() {
    var numeroUtente = (Math.floor(Math.random()*6)+1);
    var numeroComputer = (Math.floor(Math.random()*6)+1);
    var dadoUtente = numeroUtente.toString();
    var dadoComputer = numeroComputer.toString();
    var imgDadoUtente = '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkevan.org%2Fimages%2Fliarsdice%2Fdie' + dadoUtente + '.png&f=1&nofb=1" alt="dado">';
    var imgDadoComputer = '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkevan.org%2Fimages%2Fliarsdice%2Fdie' + dadoComputer + '.png&f=1&nofb=1" alt="dado">';
    // INSERIMENTO IMMAGINE DADI
    document.getElementById('dado-utente').innerHTML = imgDadoUtente;
    document.getElementById('dado-computer').innerHTML = imgDadoComputer;
// IF
    if (numeroUtente > numeroComputer) {
        document.getElementById('esito').innerHTML =  giocatore + ' ' +  'ha vinto!';
    } else if (numeroUtente < numeroComputer){
        document.getElementById('esito').innerHTML = 'il Computer ha vinto!';
    } else {
        document.getElementById('esito').innerHTML = 'Pareggio!';
    }
}
