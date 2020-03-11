class Human { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} katakan chelsea.`);
  }
}

class Raisa extends Human {
  constructor(name) {
    super(name); 
  }

  speak() {
    console.log(`${this.name} cantek sekale.`);
  }
}

let d = new Raisa('Chelsea');
d.speak();