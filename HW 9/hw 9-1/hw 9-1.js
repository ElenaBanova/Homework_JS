let onlineStore = ['Main', 'Products', 'About us', 'Contacts'];

let meinAllUl = document.getElementsByClassName('mein')[0];
console.log(meinAllUl);

for (const index of onlineStore) {
    let list = document.createElement('li');
    meinAllUl.append(list);
    list.innerText = index;
}