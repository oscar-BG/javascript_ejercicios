// Encadenamiento opcional
// *** El encadenamiento opcional ?.detiene la evaluación si el valor anterior ?.es undefinedo nully devuelve undefined.

let user = {}

// console.log(user?.name);

user = null
console.log(user?.name);  // No genera error por lo contrario manda "undefined"

// CORTOCIRCUITO
user = null
let x = 0
user?.sayHi(x++)
console.log(x);  // 0


// OTRAS VARIANTES
let userAdmin = {
    admin() {
        console.log("Soy administrador");
    }
}

let userGuest = {}

userAdmin.admin?.()
userGuest.admin?.()


let key = "firstName";
let user1 = {
    firstName: "John"
}
let user2 = null

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined