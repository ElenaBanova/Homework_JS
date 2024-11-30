fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(console.log);

let cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        for (const {id, products, discountedTotal, total, totalProducts, totalQuantity, userId} of carts) {
            let div = document.createElement('div');
            const divInfo = document.createElement('article');
            divInfo.innerText = `
             id: ${id},
             discountedTotal: ${discountedTotal},
             total: ${total},
             totalProducts: ${totalProducts},
             totalQuantity: ${totalQuantity},
             userId: ${userId}`;
            const ol = document.createElement('ol')
            for (const {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} of products) {
                let div1 = document.createElement('li');
                let p = document.createElement('p');
                p.innerText = `
                id: ${id},
                title: ${title},
                price: ${price},
                quantity: ${quantity},
                total: ${total},
                discountPercentage: ${discountPercentage},
                discountedTotal: ${discountedTotal},
                `;
                const  img = document.createElement('img');
                img.src = thumbnail;
                div1.append(p, img)
                ol.append(div1);
            }
            div.append(divInfo, ol);
            cartsDiv.appendChild(div);

        }
    })

