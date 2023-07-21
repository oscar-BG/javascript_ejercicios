function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
let user = makeUser();

console.log(user.ref.name);


// Calculadora
let calculator = {
    read() {
        this.a = 5
        this.b = 5
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}

calculator.read()
console.log(calculator.sum());
console.log(calculator.mul());


// Encadenamiento
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();