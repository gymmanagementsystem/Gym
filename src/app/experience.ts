export class Experience {
    id: number;         // 体验编号
    name:string ;    // 体验者名字
    contact:string ; // 联系方式
    address:string ; // 联系地址
    sex: number;        // 性别
    time:Date;      // 到店时间
    remark:string ;  // 备注
    constructor(id: number,name:string,contact:string,sex: number,time:Date,remark:string){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.sex = sex;
        this.time = time;
        this.remark = remark;
    }
}
