class Client {
    constructor(fid, name, surname, email, phone, ...ptoducts) {
        this.fid = fid;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = ptoducts
    }
}

const clients = [
    new Client(1, 'Anna', 'Makarevska', 'annamak231.gmail.com', '+380975263218', 'milk', 'bread', 'yogurt', 'meat', 'egs', 'butter'),
    new Client(2, 'Mila', 'Tatarinova', 'mtat555.gmail.com', '+380962584917', 'salad', 'crabs', 'fish', 'bear'),
    new Client(3, 'Kira', 'Babenko', 'kirababen21.gmail.com', '+380952363478', 'meat', 'salt', 'vine', 'tomato', 'cake'),
    new Client(4, 'Karina', 'Mishina', 'karish.gmail.com', '+380995236473', 'cucumber', 'jem', 'apple'),
    new Client(5, 'Olena', 'Kersti', 'okerst222.gmail.com', '+380932589458', 'chocolate', 'coca-cola'),
    new Client(6, 'Marina', 'Maskova', 'mmask555.gmail.com', '+380972341958', 'fish', 'sushi', 'pepper', 'vine', 'musli', 'milk', 'tea','cake'),
    new Client(7, 'Mia', 'Nikitina', 'nikita27.gmail.com', '+380965231483', 'potato', 'chocolate', 'butter', 'oil'),
    new Client(8, 'Viki', 'Murashova', 'murash888.gmail.com', '+380974512891', 'salad', 'salt', 'chicken', 'hamburger', 'cacao'),
    new Client(9, 'Liza', 'Senko', 'lizisenko999.gmail.com', '+380995874232', 'bear'),
    new Client(10, 'Anton', 'Masapura', 'Amas999.gmail.com', '+380975261586', 'cake', 'milk', 'water', 'juice'),
]
console.log(clients)