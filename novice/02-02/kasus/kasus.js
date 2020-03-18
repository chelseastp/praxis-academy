class Cat {
    constructor(nama, kelelahan, kelaparan, kesepian, bahagia) {
        this.nama = nama;
        this.kelelahan = kelelahan;
        this.kelaparan = kelaparan;
        this.kesepian = kesepian;
        this.bahagia = bahagia;
    }

    bobo(jam){
        this.kelelahan -= jam
        this.kelaparan -= jam
        return '${this.nama} Selesai bobo.'
    }

    makan(porsi){
        this.kelaparan += porsi;
        return '${this.nama} Selesai makan.'
    }

    rawat(senang){
        this.kesepian -= senang 
        if (this.kelelahan > 30) {
            return '${this.nama} Tidak ingin diganggu hmmm.' 
        } else {
            return '${this.nama} Tidak kesepian lagi yeaayy.'
        }
    }

    main(main) {
        this.kelelahan += main
        this.bahagia += main
        return '${this.nama} Mulai kelelahan, tapi ${this.nama} Merasa bahagia.'
    }
}

let cicin = new Cat('kitty', 30, 20, 30, 10)
console.log(kitty);

 