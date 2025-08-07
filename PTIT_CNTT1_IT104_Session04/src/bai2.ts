const students: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];

const avg:number = students.reduce((sum,curr)=>sum+curr,0)/10
console.log(avg);