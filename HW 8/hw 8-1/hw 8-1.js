function copy(course) {
    let functionsCourse = [];
    for (const key in course){
        if (typeof course[key] === 'function'){
            const functionClone = course[key].bind({});
            functionsCourse.push({functionClone, key});
        }
    }
    if (typeof course === 'object') {
        const courseClone = JSON.parse((JSON.stringify(course)));
        for (const func of functionsCourse){
            courseClone[func.key] = func.functionClone;
        }
        return courseClone;
    }
    throw new Error('Error 222');
}
let value1 = copy({title: 'JavaScript Complex', monthDuration: {num: 5.10}, geeting(){console.log('Hello people')}, foo(a){console.log(a)}});
console.log(value1)
value1.geeting();
value1.foo(325);
