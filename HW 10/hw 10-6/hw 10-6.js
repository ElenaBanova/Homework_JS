let input = document.getElementById('kg');
let div = document.getElementById('result');
input.oninput = function () {
    let xInp = +input.value;
    let result = xInp * 2.20462;
    div.innerText = result;
}




