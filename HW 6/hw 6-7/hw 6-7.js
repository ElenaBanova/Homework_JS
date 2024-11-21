let nums = [11, 21, 3];

let sortNums = (array, direction) => {
    if (direction === `ascending`) {
        console.log(array.sort((a, b) => a - b));
    }
    if (direction === 'descending') {
        console.log(array.sort((a, b) => b - a));

    }
}

sortNums(nums, 'ascending'); // [3,11,21]
sortNums(nums, 'descending') // [21,11,3]