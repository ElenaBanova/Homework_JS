function userObj(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

userObj([
    {id: 12, name: 'Anna', age: 25},
    {id: 20, name: 'Lena', age: 25},
    {id: 2, name: 'Kira', age: 25},
    {id: 6, name: 'Masha', age: 25},
    {id: 7, name: 'Vanya', age: 25},
    {id: 10, name: 'Alex', age: 25},
    {id: 11, name: 'Misha', age: 45}
])