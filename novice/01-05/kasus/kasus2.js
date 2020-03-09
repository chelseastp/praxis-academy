function directory(){

    var kata = new Map([
        ['strawberry', stroberi]
        ['grapes', anggur],
        ['banana', pisang],
        ['dragon fruit', buah naga]
    ]);
    console.log(kata);
    let a = prompt("Masukkan");
    let b = prompt("Masukkan");

    console.log(a,b);

    kata.set(a,b);
    console.log(kata.get(a));
    console.log(kata);
}
directory();

function cari_kata(kata){
    var c = document.getElementById("demo").nodeValue;
    alert(kata.get(c));
}