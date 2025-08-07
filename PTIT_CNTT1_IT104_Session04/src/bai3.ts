type Student = {
    name: string;
    age: number;
    email: string;
}

const student1:Student = {
    name:"thanh",
    age:12,
    email:"thanh@gmail.com"
}
const printStudent = (student:Student):void => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, email la ${student.email}`);
}
printStudent(student1);