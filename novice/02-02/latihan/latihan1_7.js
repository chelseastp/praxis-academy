class Raisa { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} nyatanya cantik.`);
  }
}

class Maudy extends Raisa {
  speak() {
    super.speak();
    console.log(`${this.name} nyatanya manis uwuw.`);
  }
}

let l = new Maudy('Chelsea');
l.speak(); 