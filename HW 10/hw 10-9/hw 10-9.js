const div = document.getElementById('uah');

setTimeout(g, 10000);
    if (localStorage.getItem('uah')) {
        div.innerText = `${localStorage.getItem('uah')} грн`
    } else {
        let divV = 100;
        div.innerText = `${divV} грн`;
        localStorage.setItem('uah', JSON.stringify(divV));
    }
function g() {
    if (localStorage.getItem('uah')) {
        let divVX = +localStorage.getItem('uah');
        divVX += 10;
        localStorage.setItem('uah', divVX);
        return div.innerText = `${divVX} грн`;
    }
    throw new Error('mini');
}

