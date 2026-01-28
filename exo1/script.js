let compteur = 0;

const affichage = document.getElementById('valeur-compteur');
const btnPlus = document.getElementById('btn-incrementer');
const btnMoins = document.getElementById('btn-decrementer');

function rafraichirEcran() {
    affichage.textContent = compteur;
}

btnPlus.addEventListener('click', () => {
    compteur++;
    rafraichirEcran();
});

btnMoins.addEventListener('click', () => {
    compteur--;
    rafraichirEcran();
});