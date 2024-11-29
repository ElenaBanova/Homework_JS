
// let numb = +document.getElementById('number')["textContent"];
//
//
// b += 1;
//
// document.getElementById('number').innerText = numb + b;

let numb = +localStorage.getItem('numb');
numb +=1;
localStorage.setItem('numb', numb);
document.getElementById('number').innerText = numb;

