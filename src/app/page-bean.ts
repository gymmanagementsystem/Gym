import { Member } from './member';

export class PageBean {
    currentPage:number;
    // 每页显示的总条数
    pageSize : number;
    // 总条数
    totalNum:number;
    // 是否有下一页
    isMore:boolean;
    // 总页数
    totalPage:number;
    // 开始索引
    startIndex:number;
    // 分页结果
    items: Array<any>;

    constructor(currentPage:number,pageSize : number,totalNum:number,startIndex:number,items: Array<any>){
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalNum = totalNum;
        this.startIndex = startIndex;
        this.items =  items;
    }
}
