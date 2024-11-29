// let f = [{id: 2}, {age: 55}]
// result(f)
//
// function result(value) {
//     localStorage.setItem('value', JSON.stringify(value))
//     let valueCopy = JSON.parse(localStorage.getItem('value')) || [];
//     valueCopy.push({color: `blue`});
//     localStorage.setItem('value', JSON.stringify(valueCopy));
// }

function addToLocalStorage(key, objToAdd) {
    const lsItem = localStorage.getItem(key);
    if (!lsItem) {
        throw new Error('there is no such array')
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(key, JSON.stringify(array));
}
addToLocalStorage('value', {in: 222})