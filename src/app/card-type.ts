export class CardType {
    id: number;        // 会员卡类型编号 int
    name: string;      // 会员卡类型名称 varchar
    price: any;        // 会员卡价格	double
    remark: string;    // 会员卡备注	text

    constructor(id?: number, name?: string, price?: any, remark?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.remark = remark;
    }
}
