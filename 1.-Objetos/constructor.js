function Calculator() {
    this.read = function(){
        this.a = 5
        this.b = 5
    },
    this.sum = function() {
        return this.a + this.b
    },
    this.mul = function() {
        return this.a * this.b
    }
}


let cal1 = new Calculator()
// cal1.sum()
cal1.read()
console.log(cal1.sum());
console.log(cal1.mul());


// CREAR UN ACUMULADOR
function Accumulator(startingValue){
    this.value = startingValue
    this.read = function() {
        return this.value += startingValue
    }
}

let accumulator = new Accumulator(1);
accumulator.read()
accumulator.read()
accumulator.read()
accumulator.read()
accumulator.read()

console.log(accumulator.read());