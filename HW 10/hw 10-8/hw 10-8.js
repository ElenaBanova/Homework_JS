const form = document.forms['tableGenerateForm'];
const table = document.getElementById('tablet');

form.onsubmit = function (ev) {
    table.innerText = '';
    ev.preventDefault();
    let rowsV = +form.rows.value;
    let cellsV = +form.cells.value;
    let text = form.text.value;

    for (let i = 0; i < rowsV; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsV; j++) {
            const td = document.createElement('td');
            td.innerText = text;
            tr.appendChild(td);

        }
        table.appendChild(tr)

    }

}
