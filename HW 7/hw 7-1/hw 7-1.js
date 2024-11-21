function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];
users.push(new User(1, 'Anna', 'Makarevska', 'annamak231.gmail.com', '+380975263218'));
users.push(new User(2, 'Mila', 'Tatarinova', 'mtat555.gmail.com', '+380962584917'));
users.push(new User(3, 'Kira', 'Babenko', 'kirababen21.gmail.com', '+380952363478'));
users.push(new User(4, 'Karina', 'Mishina', 'karish.gmail.com', '+380995236473'));
users.push(new User(5, 'Olena', 'Kersti', 'okerst222.gmail.com', '+380932589458'));
users.push(new User(6, 'Marina', 'Maskova', 'mmask555.gmail.com', '+380972341958'));
users.push(new User(7, 'Mia', 'Nikitina', 'nikita27.gmail.com', '+380965231483'));
users.push(new User(8, 'Viki', 'Murashova', 'murash888.gmail.com', '+380974512891'));
users.push(new User(9, 'Liza', 'Senko', 'lizisenko999.gmail.com', '+380995874232'));
users.push(new User(10, 'Anton', 'Masapura', 'Amas999.gmail.com', '+380975261586'));
console.log(users)

const users1 = [
    new User(1, 'Anna', 'Makarevska', 'annamak231.gmail.com', '+380975263218'),
    new User(2, 'Mila', 'Tatarinova', 'mtat555.gmail.com', '+380962584917'),
    new User(3, 'Kira', 'Babenko', 'kirababen21.gmail.com', '+380952363478'),
    new User(4, 'Karina', 'Mishina', 'karish.gmail.com', '+380995236473'),
    new User(5, 'Olena', 'Kersti', 'okerst222.gmail.com', '+380932589458'),
    new User(6, 'Marina', 'Maskova', 'mmask555.gmail.com', '+380972341958'),
    new User(7, 'Mia', 'Nikitina', 'nikita27.gmail.com', '+380965231483'),
    new User(8, 'Viki', 'Murashova', 'murash888.gmail.com', '+380974512891'),
    new User(9, 'Liza', 'Senko', 'lizisenko999.gmail.com', '+380995874232'),
    new User(10, 'Anton', 'Masapura', 'Amas999.gmail.com', '+380975261586'),
]
console.log(users1)

