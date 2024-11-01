// funzione.js

function cambiaTitolo(nuovoTitolo) {
    // Trova l'elemento <h1> nella pagina e cambia il suo testo
    const titolo = document.querySelector("header h1");
    if (titolo) {
        titolo.textContent = nuovoTitolo;
    }
}
