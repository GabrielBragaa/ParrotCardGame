let qtd;


function qtdCarta() {
    const deck = document.querySelector('.deck');
    let contador = 0;
    qtd = prompt('Com quantas cartas quer jogar?');
    while (qtd < 4 || qtd > 14 || qtd % 2 !== 0) {
        qtd = prompt('Com quantas cartas quer jogar?');
    } 

    while (contador < qtd) {
        deck.innerHTML += '<div class="carta"><div class="face frente"><img src="./img/back.png" alt=""></div><div class="face verso"><img src="" alt=""></div></div>';
        contador++;
    }
}


qtdCarta();