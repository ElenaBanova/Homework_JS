const sessionList = JSON.stringify(localStorage.getItem('sessionList'));
let div = document.createElement('div')
div.innerText = sessionList;
document.body.append(div)
