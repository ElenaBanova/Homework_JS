const f1 = document.getElementById('f1');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let age = document.getElementById('age');
let button = document.getElementById('button');
let div = document.createElement('div');
f1.onsubmit = function (ev) {
    ev.preventDefault();

}
button.onclick = function () {
    div.innerHTML = '';
    if (name.value) {
        let pName = document.createElement('p');
        pName.innerText = name.value;
        div.append(pName);
    }
    if (surname.value) {
        let pSurname = document.createElement('p');
        pSurname.innerText = surname.value;
        div.append(pSurname);
    }
    if (age.value) {
        let pAge = document.createElement('p');
        pAge.innerText = age.value;
        div.append(pAge)
    }
    document.body.appendChild(div)
}


