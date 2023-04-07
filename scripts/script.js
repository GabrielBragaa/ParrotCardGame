const imagens = ['<img src="./img/bobrossparrot.gif" alt=""></img>', '<img src="./img/explodyparrot.gif" alt=""></img>', '<img src="./img/fiestaparrot.gif" alt=""></img>', 
'<img src="./img/metalparrot.gif" alt=""></img>', '<img src="./img/revertitparrot.gif" alt=""></img>', '<img src="./img/tripletsparrot.gif" alt=""></img>', 
'<img src="./img/unicornparrot.gif" alt=""></img>'];
let cartasViradas = [], imgSelecionadas = [], primeiraCarta, segundaCarta;

function qtdCarta() {
    const deck = document.querySelector('.deck');
    let qtd = prompt('Com quantas cartas quer jogar?');
    while (qtd < 4 || qtd > 14 || qtd % 2 !== 0) {
        qtd = prompt('Com quantas cartas quer jogar?');
    } 

    for (let contador = 0; contador < (qtd/2); contador++) {
        let carta = imagens[contador];
        imgSelecionadas.push(carta);
        imgSelecionadas.push(carta);
    }

    imgSelecionadas.sort(embaralha);

    for (let contador = 0; contador < qtd; contador++) {
        deck.innerHTML += `<div class="carta" onclick="virarCarta(this)"><div class="face frente"><img src="./img/back.png" alt=""></div><div class="face verso">${imgSelecionadas[contador]}</div></div>`;
    }
}

function virarCarta(carta) {
    cartasViradas.push(carta);
    if ( primeiraCarta === undefined || segundaCarta === undefined){
        carta.classList.add('virada');
        if (primeiraCarta === undefined) {
            primeiraCarta = carta;
        } else if (segundaCarta === undefined) {
            segundaCarta = carta;
            if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
                console.log('FOI')
            }else {
                setTimeout(voltaCarta, 1000);
            }
    }

    function voltaCarta() {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        primeiraCarta = undefined;
        segundaCarta = undefined;
    }
}
}   

function embaralha() { 
	return Math.random() - 0.5; 
}

qtdCarta();
