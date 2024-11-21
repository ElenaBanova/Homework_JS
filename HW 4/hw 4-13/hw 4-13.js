function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let curs;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            curs = item;
        }
    }

     return sumUAH / curs.value;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'))