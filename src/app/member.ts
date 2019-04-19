import { CardType } from './card-type';
import { Staff } from './staff';
import { Wardrobe } from './wardrobe';
export class Member {
    id: any;                 // 会员卡号     --id
    name: string;            // 会员姓名     --name
    cardType: CardType;      // 会员卡类型   --cardType_id
    sex: any;                // 性别         --sex
    openTime: Date;          // 开卡时间     --openTime
    closeTime: Date;         // 到期时间     --closeTime
    balance: any;            // 会员卡余额   --balance
    tel: string;             // 电话号码     --tel
    state: any;              // 会员状态     --state
    birthday: Date;          // 会员生日     --birthday
    coach: Staff;            // 教练         --coach
    wardrobe: Wardrobe;      // 衣柜         --wardrobe_id
    counselor: Staff;        // 会籍顾问     --counselor
    identify: any;           // 证件类型     --identify
    idCard: string;           // 证件编号     --idCard
    address: string;         // 联系地址     --address
    remark: string;          // 备注          --remark

    constructor(id: any, name: string, cardType: CardType, sex: any, openTime: Date, closeTime: Date, balance: any,
        tel: string, state: any, birthday: Date, coach: Staff, wardrobe: Wardrobe, counselor: Staff, identify: any,
        idCard: string, address: string, remark: string) {
        this.id = id;
        this.name = name;
        this.cardType = cardType;
        this.sex = sex;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.tel = tel;
        this.state = state;
        this.balance = balance;
        this.coach = coach;
        this.birthday = birthday;
        this.wardrobe = wardrobe;
        this.counselor = counselor;
        this.identify = identify;
        this.idCard = idCard;
        this.address = address;
        this.remark = remark;
    }
}
