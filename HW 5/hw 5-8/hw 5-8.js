let value = [253, 3454, 5464, 'name', 'ice', 'big', true, false, 'sky'];

let list = (val) => {
    for (const id of val) {
        document.write(`<ul>`);
        document.write(`<li>${id}</li>`);
        document.write(`</ul>`)
    }
}

list(value)