import { Staff } from './staff';

export class Department {
    id: number;      // 部门id	int
    name: string; // 部门名称 varchar
    info: string; // 部门信息 text
    staffs: Array<Staff>;     // 部门下的所有员工
    remark: string;      // 备注
    constructor(id: number, name: string, info: string, staffs: Array<Staff>, remark: string) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.staffs = staffs;
        this.remark = remark;
    }
}
