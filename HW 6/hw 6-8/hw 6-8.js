let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(value=> value.monthDuration>5));
console.log(coursesAndDurationArray.map((value, index)=>{return {id:index+1, title: value.title, monthDuration: value.monthDuration}}))