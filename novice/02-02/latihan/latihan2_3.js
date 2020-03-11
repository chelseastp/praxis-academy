function Fruit (type) {
    this.type = type;
    this.color = 'hijau';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return 'Warna dari ' + this.type + ' adalah ' + this.color + '.';
}

let grapes = new Fruit('Anggur');
console.log(grapes.getInformation());

grapes.color = 'ungu';
console.log(grapes.getInformation());