type Student ={
    readonly studentId:string;
    name:string;
    email:string;
    hasCompleted:boolean;
    finalScore?: number;
}

type Course = {
    courseId:string;
    title:string;
    instructor:string;
    students: Student[],
    isActive:boolean;
}

type CourseManager = {
    schoolName:string;
    courses: Course[];
    year:number;
}

const courseManager: CourseManager = {
    schoolName: "Trung tâm đào tạo lập trình ABC",
    year: 2025,
    courses: [
        {
            courseId: "TS001",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                {
                    studentId: "S001",
                    name: "Nguyễn Minh",
                    email: "nguyenminh@example.com",
                    hasCompleted: true,
                    finalScore: 9,
                },
                {
                    studentId: "S002",
                    name: "Trần Hạnh",
                    email: "tranhanh@example.com",
                    hasCompleted: true,
                    finalScore: 8,
                },
                {
                    studentId: "S003",
                    name: "Lê Bình",
                    email: "lebinh@example.com",
                    hasCompleted: false,
                },
            ],
        },
        {
            courseId: "HTML001",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                {
                    studentId: "S004",
                    name: "Phạm Khoa",
                    email: "phamkhoa@example.com",
                    hasCompleted: false,
                },
                {
                    studentId: "S005",
                    name: "Võ Huy",
                    email: "vohuy@example.com",
                    hasCompleted: false,
                },
            ],
        },
    ],
};
const getCompletedStudents = (course: Course): Student[] =>{
    let completed:Student[] = [];
    const {students} = course;
    students.forEach((student) => {
        if(student.hasCompleted) {
            completed.push(student);
        }
    })
    return completed
}
const calculateAverageScore = (course: Course): number|null  =>{
    const {students} = course;
    const completed:Student[] = getCompletedStudents(course);
    if(completed.length === 0){
        return null;
    }
    const avg =completed.reduce((sum,curr)=> sum + (curr.finalScore || 0),0)/completed.length;
    return avg
}
const printCourseReport = (manager: CourseManager): void =>{
    const {courses} = manager;
    let coursesCount = 0;
    courses.forEach((course: Course): void => {
        const completed:number = getCompletedStudents(course).length
        const avg:any = calculateAverageScore(course)
        
        coursesCount++
        console.log(`${coursesCount}. Khoa: ${course.title} (GV: ${course.instructor})`);
        console.log(`Tong hoc vien: ${course.students.length}`)
        console.log(`Hoan thanh: ${completed} hoc vien`)
        console.log(`Trung binh diem: ${typeof avg === "number"?avg:"N/A"}`)
        console.log(`Trang Thai: ${course.isActive? "Dang mo":"Da dong"}`)
        console.log(`=============================================`)
    })
}

printCourseReport(courseManager)
