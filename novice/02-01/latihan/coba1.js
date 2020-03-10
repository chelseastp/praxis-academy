//orang tua (parent)
var kendaraan = function(warna){
    this.warna = warna;
}

//turunan
var Mobil = function(warna){
    Kendaraan.call(this, warna)
}
//karena JS first objek maka dibaj objek dulu :
Mobil.prototype = Object.create(Kendaraan.prototype);

//konstruktor ini pemanggilannya.
Mobil.prototype.constructor = Mobil;

//constructor => dipakai ketika function/class kendaraan digunakan
var mobil = new Kendaraan('biru');
var corola = new Mobil ('hijau misal');

console.log(corola.Mobil);
console.log(mobil.warna);