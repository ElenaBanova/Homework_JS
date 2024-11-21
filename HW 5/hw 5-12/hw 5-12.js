const swap = (arr, x1, x2) => {
    if (x1 < arr.length && x2 < arr.length) {
        let temp = arr[x1];
        arr[x1] = arr[x2];
        arr[x2] = temp;
        return arr
    }
    return -Infinity;
}
console.log(swap([11, 22, 33, 44], 0, 1))