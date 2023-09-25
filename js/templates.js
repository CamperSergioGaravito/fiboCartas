import {otras} from './poker.js'

export function templateCarta(contenedor,imgs) {
    
    for(let x=0;x<contenedor.length;x++) {
        /* console.log(contenedor[x],imgs[x]) */
        contenedor[x].innerHTML = //html
                            `
                            <img src="${imgs[x]}" alt="" class="card-img img-thumbnail imgCarta">
                            `
        /* console.log(contenedor[x],imgs[x]) */
    }
}