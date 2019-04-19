import { Department } from './department';
export class Staff {
    id: number;     // 员工id	staff_id number
    name: string;  // 员工姓名	staff_anme	varchar
    sex: number;   // 员工性别	staff_sex	char
    birthday: Date; // 员工生日	staff_birthday	date
    time: Date;    // 入职时间	staff_time	date
    address: string; // 地址	staff_addres	varchar
    phone: string;  // 联系方式	staff_phone	char
    department: Department; // 所属部门id	department_id	number
    constructor(id: number, name: string, sex: number, birthday: Date,
        time: Date, address: string, phone: string, department: Department) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.time = time;
        this.address = address;
        this.phone = phone;
        this.department = department;
    }
}
