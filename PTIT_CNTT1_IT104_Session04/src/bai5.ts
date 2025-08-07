type Person = {
    name:string,
    age:number
}

type Employee = {
    employeeId : number | string,
    department: string
}

type StaffMember = Person & Employee
const staff1:StaffMember = {
    name:"thanh",
    age: 12,
    employeeId:"AS3247HA",
    department:"San Francisco",
}

const printStaffInfo = (staff1: StaffMember): void  => {
    console.log(`${staff1.name}(${staff1.age} tuoi) , Ma nhan vien: ${staff1.employeeId} - Phong: ${staff1.department}`);
}
printStaffInfo(staff1);
