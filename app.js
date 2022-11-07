const dugme = document.querySelector('#dugme');
const rezultat = document.querySelector('#konacan')

function racunanje (prviBroj, drugiBroj, operacija) {
    if (operacija === 1) {
        return prviBroj + drugiBroj;
    } else if (operacija === 2) {
        return prviBroj - drugiBroj;
    } else if (operacija === 3) {
        return prviBroj * drugiBroj;
    } else if (operacija === 4) {
        if (drugiBroj === 0) {
            alert('ne moze se deliti sa nulom')
            return 'greška'
        } else {
            return prviBroj / drugiBroj;
        }
    }
}


dugme.addEventListener('click', function () {
    const prviBroj = parseInt(document.querySelector('#prvi-broj').value);
    const drugiBroj = parseInt(document.querySelector('#drugi-broj').value);
    const operacija = parseInt(document.querySelector('#operacija').value);
    rezultat.innerText = racunanje(prviBroj, drugiBroj, operacija);
} )