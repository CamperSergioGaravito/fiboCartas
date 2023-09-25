/* Impote de función para sacar número aleatorio */
import {numAleatorio} from './numRandom.js';

/* Importe de cartas del poker */
import {cartas,otras} from './poker.js';

/* Templates cartas */
import {templateCarta} from './templates.js';

/* Fibonacci */
import {buscar} from './fibonacci.js';

/* Botones */
const btns = document.querySelectorAll('button');

/* Contenedores de cartas */
const contCarta1 = document.getElementById('carta1');
const contCarta2 = document.getElementById('carta2');
const contCartFibo = document.getElementById('cartaFibo');

const listaContenedores = [
    contCarta1,
    contCarta2,
    contCartFibo
];

let listaCartasDefault = [
    otras.cartaAtras,
    otras.cartaAtras,
    otras.cartaAtras
];

const juego = {
    valor1: 0,
    valor2: 0,
    fibonacci: 0,
    pts: 0
}

let listaCartas = [
    listaCartasDefault[0],
    listaCartasDefault[1],
    listaCartasDefault[2]
];

/* Template incial de las cartas boca abajo */
templateCarta(listaContenedores,listaCartas);

/* Evento click btns */
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const numCarta = numAleatorio(1,11) - 1;
        const carta = numCarta + 1;
        const numItemCarta = numAleatorio(0,3);
        const idbtn = e.target.id;

        switch(idbtn) {
            case 'btn1':
                listaCartas[0] = cartas[numCarta][numItemCarta];
                /* console.log(listaCartas[0]); */
                const num1 = document.getElementById('num1').innerHTML = carta;
                btn.style.backgroundColor = '#00425A';
                btn.disabled = true;
                juego.valor1 = carta;
                break;
            
            case 'btn2':
                listaCartas[1] = cartas[numCarta][numItemCarta];
                /* console.log(listaCartas[0]); */
                const num2 = document.getElementById('num2').innerHTML = carta;
                btn.style.backgroundColor = '#00425A';
                btn.disabled = true;
                juego.valor2 = carta;
                break;
            
            default:
               return; 
        }

        templateCarta(listaContenedores,listaCartas);
        if(juego.valor1 !== 0 && juego.valor2 !== 0) {
            juego.fibonacci = buscar(juego.valor1 + juego.valor2);
            console.log('Fibonacci ', juego.fibonacci);

            if(juego.fibonacci !== 0) {
                console.log('Numero ganador ', juego.fibonacci);
                juego.pts += juego.fibonacci;
                listaCartas[2] = otras.cartaFibonacci;
                document.getElementById('pts').innerHTML = juego.pts;
                templateCarta(listaContenedores,listaCartas);
                contCartFibo.innerHTML += //html
                                        `
                                        <h2 class="position-absolute rounded-circle text-black fw-bold h2Fibo">${juego.fibonacci}</h2>
                                        `

                restablecer(3000)
            }

            else {
                restablecer(1000)
            }

            juego.valor1 = 0;
            juego.valor2 = 0;
            juego.fibonacci = 0;

        }

        else {
            templateCarta(listaContenedores,listaCartas);
        }


    })

})


function restablecer(time) {
    const restart = setTimeout(() => {
        listaCartas = [
            listaCartasDefault[0],
            listaCartasDefault[1],
            listaCartasDefault[2]
        ];

        templateCarta(listaContenedores,listaCartas);

        btns[0].disabled = false;
        btns[1].disabled = false;
        btns[0].style = '--bs-btn-bg: #198754;';
        btns[1].style = '--bs-btn-bg: #198754;';

        const h2 = document.querySelectorAll('h2');
        console.log(h2)
        h2[2].innerHTML = '<-- Oprimir';
        h2[3].innerHTML = '<-- Oprimir';
        clearTimeout(restart)

    }, time)
}