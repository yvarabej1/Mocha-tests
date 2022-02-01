class User {
    constructor(id, name, country) {
      this.name = name;
      this.id = id;
      this.country = country;
    }
    hello(a, b){
        const c = a+b;
        return c;
    }
  
    greet() {
      return`Hello! My name is ${this.name}`;
    }
  
    speak() {
      console.log(`I'm from ${this.country}`);
    }
  }
  module.exports = User;
  