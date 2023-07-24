// Formas de escribir numeros
let billion = 1000000000

// Formas mas legible
billion = 1_000_000_000

// En JavaScript, podemos acortar un número añadiéndole la letra "e"y especificando el recuento de ceros:
billion = 1e9
let numero = 1.23e6

// En otros palabras, e multiplica el número por 1 con el conteo de ceros dado

/**
 * 1e9 === 1 * 1_000_000_000
 * 1.23e6 === 1.23 * 1_000_000 
 */

// Ahora escribamos algo muy pequeño. Digamos, 1 microsegundo (una millonésima de segundo):
// Forma corta
let mсs = 0.000001;
// Forma corta
mcs = 1e-6
let mcs_1 = 1234e-2
let mcs_2 = 1.23e-6

/**
 * 1e6 == 1 / 1_000_000
 * 1234e-2 == 1234 / 100
 * 1.23e-6 == 1.23 / 1_000_000
 */


// ##### Redondeo  ###

// redondea hacia abajo
console.log(Math.floor(3.1));
console.log(Math.floor(-1.1));

// redondea hacia arriba
console.log(Math.ceil(3.1));
console.log(Math.ceil(-1.1));

// Redondea al entero más cercado
console.log(Math.round(3.1));
console.log(Math.round(3.5));
console.log(Math.round(3.7));
console.log(Math.round(-1.6));

// Elimina cualquier cosas despues del punto
console.log(Math.trunc(3.1233));
console.log(Math.trunc(43.43));
console.log(Math.trunc(-1.2332));


// Redondear al numero de decimales deseado

let num = 1.5465657
// devuelve una cadena
console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));

// agregar un mas antes de la operación lo convierte en número
console.log(+num.toFixed(2));
console.log(typeof +num.toFixed(2));


// #### ParseInt y ParseFloat

/**
 * Ellos “leen” un número de una cadena hasta que no pueden. En caso de error, se devuelve el número recopilado.
 *  La función parseIntdevuelve un número entero, mientras que parseFloatdevolverá un número de punto flotante:
 */


console.log(parseInt('10px'));
console.log(parseInt('12.5am'));

// Pasar segundo argumento
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));

// ###### Otras funciones

// Números aleatorios Devuelve un número aleatorio de 0 a 1 (sin incluir 1).
console.log(Math.random());

// Buscar el mayor y el menor
console.log(Math.min(1,3,-2,5,-1));
console.log(Math.max(1,3,-2,5,-1));


// Devuelve n elevado a la potencia dada
console.log(Math.pow(2,10));