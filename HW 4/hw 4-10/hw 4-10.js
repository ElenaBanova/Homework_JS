let number = [11, 12, 25, 236, 132, 258, 34, 69, 1154, 76, 9];

function numberMin(num) {
    let min = num[0];
    for (const numMin of num) {
        if (numMin < min) {
            min = numMin
        }
    }
    return min
}

console.log(numberMin(number))


