const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`Nama kembaran Raisa adalah ${this.name}. dan saya cantik sekali ? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = "Chelsea";
  me.isHuman = true;
  
  me.printIntroduction();