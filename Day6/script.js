let ar=[1,3,4,64,77,56]
// let newar =ar.map((x) => x*2);
// console.log(newar);
// let newar = ar.filter((x) => x%2==0),map((x) => x*3);
// console.log(newar);
//let newar = ar.reduce((x,y)=>x+y,0)
// let newar = ar.filter((x) => x%2==0).map((x)=>x*4).reduce((x,y)=>x+y,0)
// console.log(newar);
const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 45 }
  ];

const totalScore = students
    .map(student => student.score * 2)
    .filter(score => score > 60)
    .reduce((total, score) => total + score, 0); 
console.log(totalScore);