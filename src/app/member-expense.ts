import { Member } from './member';
import { Product } from './product';
import { Course } from './course';

export class MemberExpense {
     id:number;             // 消费记录编号
     member:Member;      // 消费会员
     product:Product;    // 商品信息
     course:Course;      // 课程信息
     cost:any;        // 花费金额
     quantity:number;       // 数量
     time:Date ;          // 购买时间
     remark:string;      // 备注
     constructor(id:number,member:Member,product:Product,course:Course,cost:any, quantity:number,time:Date,remark:string){
        this.id = id;
        this.member = member;
        this.product = product;
        this.course = course;
        this.cost = cost;
        this.quantity = quantity;
        this.time = time;
        this.remark = remark;
     }
}
