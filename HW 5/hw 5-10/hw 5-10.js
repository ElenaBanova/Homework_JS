let number = [11, 12, 25, 236, 132, 258, 34, 69, 1154, 76, 9];

let numberMin = (num) => {
    let min = num[0];
    for (let i=1; i<num.length; i++) {
        let numMin = num[i];
        if (numMin < min) {
            min = numMin
        }
    }
    return min
}
console.log(numberMin(number))