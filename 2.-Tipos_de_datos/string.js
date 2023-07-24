// ### Buscando una subcadena de caracteres

let cadena = 'Widget con id';

console.log(cadena.indexOf('Widget'));
console.log(cadena.indexOf('widget'));
console.log(cadena.indexOf('id'));
console.log(cadena.indexOf('id',2));


let str = 'Astuto como un zorro, fuerte como un buey';
let target = 'como'

let pos
 = 0
while (true) {
    let foundPos = str.indexOf(target, pos)
    if (foundPos === -1) break;

    console.log(`Encontrado en: ${foundPos}`);
    pos = foundPos +1
}


// ###### includes, startsWith, endsWith

// El método más moderno str.includes(substr, pos) devuelve true o false si str contiene substr o no.
console.log(cadena.includes('Widget'));

// El segundo argumento opcional de str.includes es la posición desde donde comienza a buscar:
console.log(cadena.includes('Widget', 10));


// Los métodos str.startsWith (comienza con) y str.endsWith (termina con) hacen exactamente lo que dicen:
console.log(cadena.startsWith('Widget'));
console.log(cadena.endsWith('id'));


// ##### Obteniendo un substring

/**
 * Existen 3 métodos en JavaScript para obtener un substring: substring, substr y slice.

str.slice(comienzo [, final])
Retorna la parte del string desde comienzo hasta (pero sin incluir) final.

Por ejemplo:
 */
str = "stringify";
console.log(str.slice(0,5)); // 'strin', el substring desde 0 hasta 5 (sin incluir 5)
console.log(str.slice(1,2));

// Si no existe el segundo argumento, entonces slice va hasta el final del string:
console.log(str.slice(2));


// También son posibles valores negativos para comienzo/final. Estos indican que la posición es contada desde el final del string.
console.log(str.slice(-4,-1));


console.log(str.substring(2,6));
console.log(str.substring(6,2));

// str.substr(comienzo [, largo])
console.log(str.substr(2,4));


console.log(str.trim());


// ###### Hacer mayúscula el primer carácter ###########

function ucFirst(str) {
    if (!str) return str

    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst('john'));


// Buscar spam
function checkSpam(str){
    if (!str) return str
    let lowerStr = str.toLowerCase()
    let diccionario_span = ['viagra','xxx','youtube','armas']
    for (let palabra of diccionario_span) {
        if (lowerStr.includes(palabra)) {
            return true
        }
    }
    return false
}

console.log(checkSpam('compra .... ahora'));


// ######## Truncar el texto ########
function truncate(mensaje, length) {
    if(!str) return str


}
let mensaje = 'Hola a todos como estan este es un texto de bienvenida';
let length = 10;
console.log(mensaje.slice(0,-3));
// console.log(truncate(''));