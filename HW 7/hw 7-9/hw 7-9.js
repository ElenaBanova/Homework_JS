let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Array.prototype.meForEach = function (callback) {
    for (const course of this){
        callback(course);
    }}

    coursesAndDurationArray.meForEach((value)=> console.log(value));

Array.prototype.meFilter = function (callback1){
    const newArrFilter = [];
    for (const item of this){
        if (callback1(item)){
            newArrFilter.push(item)}
        }
    return newArrFilter;
}
console.log(coursesAndDurationArray.meFilter(a => a.monthDuration > 5));


