/* Configuración cantidad fibonacci */
const numConf = 11;

export function buscar(num) {
    console.log('num: ',num)
    let x = 1;
    let y = 1;

    do {
        let suma = x + y;
        if(suma === num) {
            return num;
        }
        else {
            y = x;
            x = suma;
        }
    }

    while(x + y <= numConf*2)

    return 0
}