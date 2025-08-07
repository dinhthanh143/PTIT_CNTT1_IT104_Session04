type Subject ={
    subjectName:string,
    score: number|string,
}

type Student ={
    id:number,
    name:string,
    age:number | string,
    subjects:Subject[]
}

const students:Student[] = []

const addStudent = (subject:Subject[],student:Student,students:Student[]):void => {
    student.subjects = subject
    students.push(student)
}

addStudent([{subjectName:"toan",score:9}], {id:1242, name:"thanh", age:12, subjects:[]},students)
