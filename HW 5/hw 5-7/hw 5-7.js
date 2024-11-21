let list = (text, quantity) => {
    for (let x = 0; x < quantity; x++) {
        document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`</ul>`)
    }
}

list('Lorem ipsum dolor sit amet, consectetur adipisicing.', 3)

