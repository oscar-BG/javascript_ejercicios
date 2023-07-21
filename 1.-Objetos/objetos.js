// Creación de objetos
let user = {}
user.name = 'Jhon'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

console.log(user);


// Verificar que un objeto este vacio
let schedule = {}

console.log(isEmpty(schedule));
schedule["8:30"] = "Hora de leveantarse";
console.log(isEmpty(schedule));


function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}


// Suma de propiedades de un objeto
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(sum_salaries(salaries));
function sum_salaries(objeto) {
    let sum = 0;
    for(let key in objeto){
        sum += objeto[key]
    }

    return sum
}

// Multiplicar propiedades numéricas por 2
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

console.log(menu);

function multiplyNumeric(objeto) {
    for(let key in objeto) {
        if (typeof(objeto[key]) == 'number' ) {
            objeto[key] *= 2
        }
    }
}

multiplyNumeric(menu)

console.log(menu);
