class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Mia', 21, 36),
    new Cinderella('Kristi', 20, 34),
    new Cinderella('Elena', 22, 36),
    new Cinderella('Lidia', 21, 37),
    new Cinderella('Maya', 25, 38),
    new Cinderella('Maria', 21, 39),
    new Cinderella('Kira', 23, 35),
    new Cinderella('Sofia', 24, 36),
    new Cinderella('Kersti', 22, 37),
    new Cinderella('Kora', 28, 38),
]
console.log(cinderellas)

class Prince {
    constructor(name, age, idShoe) {
        this.name = name;
        this.age = age;
        if (idShoe < cinderellas.length + 1) this.idShoe = idShoe - 1;
    }
}

const prince = new Prince('Kiril', 27, 7);

for (let id =0; id < cinderellas.length; id++) {
    if (prince.idShoe === id) {
        prince.wife = cinderellas[id]; //добавляет к принцу поле жена
        console.log(cinderellas[id])}
}

console.log(cinderellas.find((cinderellas, index) => index === prince.idShoe));
