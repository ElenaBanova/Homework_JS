const arr = document.getElementById('arr');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let arrAll = [];

function Ar(id, name, username, password) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
}

let user1 = new Ar(1, 'Alla', 'Bortich', '1111bbb');
let user2 = new Ar(2, 'Bella', 'Bors', '11v3bbb');
let user3 = new Ar(3, 'Balli', 'Bars', '11v353b');
let user4 = new Ar(4, 'Gena', 'Vois', 'v353b');
let user5 = new Ar(5, 'Genadiy', 'Voisak', 'v258nbv');
let user6 = new Ar(6, 'Maria', 'Mort', 'v258n222v');
let user7 = new Ar(7, 'Mariana', 'Markova', 'v2');
let user8 = new Ar(8, 'Misha', 'Movi', 'v266vvv');
let user9 = new Ar(9, 'Meri', 'Mins', 'v2226cfv');
let user10 = new Ar(10, 'Kira', 'Mirs', 'v2226c222fv');
let user11 = new Ar(11, 'Genadiy', 'Voisak', 'v258nbv');
let user12 = new Ar(12, 'Maria', 'Mort', 'v258n222v');
let user13 = new Ar(13, 'Mariana', 'Markova', 'v2');
let user14 = new Ar(14, 'Misha', 'Movi', 'v266vvv');
let user15 = new Ar(15, 'Alla', 'Bortich', '1111bbb');
let user16 = new Ar(16, 'Bella', 'Bors', '11v3bbb');
let user17 = new Ar(17, 'Balli', 'Bars', '11v353b');
let user18 = new Ar(18, 'Gena', 'Vois', 'v353b');
let user19 = new Ar(19, 'Genadiy', 'Voisak', 'v258nbv');
let user20 = new Ar(20, 'Genadiy', 'Voisak', 'v258nbv');
let user21 = new Ar(21, 'Maria', 'Mort', 'v258n222v');
let user22 = new Ar(22, 'Mariana', 'Markova', 'v2');
let user23 = new Ar(23, 'Misha', 'Movi', 'v266vvv');
let user24 = new Ar(24, 'Meri', 'Mins', 'v2226cfv');
let user25 = new Ar(25, 'Kira', 'Mirs', 'v2226c222fv');
let user26 = new Ar(26, 'Maria', 'Mort', 'v258n222v');
let user27 = new Ar(27, 'Mariana', 'Markova', 'v2');
let user28 = new Ar(28, 'Misha', 'Movi', 'v266vvv');
let user29 = new Ar(29, 'Meri', 'Mins', 'v2226cfv');
let user30 = new Ar(30, 'Kira', 'Mirs', 'v2226c222fv');
arrAll.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, user21, user22, user23, user24, user25, user26, user27, user28, user29, user30)

let counter = 0;
let limit = 10;

for (let ind = counter; ind < limit; ind++) {
    let block = document.createElement('p');
    block.innerText = `${arrAll[ind].id} ${arrAll[ind].name} ${arrAll[ind].username} ${arrAll[ind].password}`;
    arr.append(block)
}


next.addEventListener('click', function () {
    arr.innerText = '';
    counter += 10;
    limit += 10;
    for (let b = counter; b < limit; b++) {
        if (limit <= arrAll.length){
        let blockNX = document.createElement('p');
        blockNX.innerText = `${arrAll[b].id} ${arrAll[b].name} ${arrAll[b].username} ${arrAll[b].password}`;
        arr.append(blockNX);}
    }

})

prev.addEventListener('click', function () {
    arr.innerText = '';
    counter -= 10;
    limit -= 10;
    for (let k = counter; k < limit; k++) {
        let blockPL = document.createElement('p');
        blockPL.innerText = `${arrAll[k].id} ${arrAll[k].name} ${arrAll[k].username} ${arrAll[k].password}`;
        arr.append(blockPL);}
    }
)