const students = [];
const addStudent = (subject, student, students) => {
    student.subjects = subject;
    students.push(student);
};
addStudent([{ subjectName: "toan", score: 9 }], { id: 1242, name: "thanh", age: 12, subjects: [] }, students);
export {};
//# sourceMappingURL=TH.js.map