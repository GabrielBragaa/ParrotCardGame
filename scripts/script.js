function qtdCarta() {
    const deck = document.querySelector('.deck');
    let contador = 0;
    let qtd = prompt('Com quantas cartas quer jogar?');
    while (qtd < 4 || qtd > 14 || qtd % 2 !== 0) {
        qtd = prompt('Com quantas cartas quer jogar?');
    } 

    while (contador < qtd) {
        deck.innerHTML += '<div class="carta" onclick="virarCarta(this)"><div class="face frente"><img src="./img/back.png" alt=""></div><div class="face verso"><img src="" alt=""></div></div>';
        contador++;
    }
}


function virarCarta(carta) {
    const frente = carta.querySelector('.frente');
    frente.classList.add('vira-frente');
    const verso = carta.querySelector('.verso');
    verso.classList.add('vira-verso');
    function voltaCarta() {
        const front = carta.querySelector('.frente');
        front.classList.remove('vira-frente');
        const back = carta.querySelector('.verso')
        back.classList.remove('vira-verso')
    }
    setTimeout(voltaCarta, 1000);
}

qtdCarta();