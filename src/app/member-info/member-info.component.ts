import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberInfoService } from '../member-info.service';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
// 会员模块组件
export class MemberInfoComponent implements OnInit {
  members: Array<any>; // 所有会员卡类型
  constructor(private memberInfoService: MemberInfoService) {
    // 获得会员卡类型
    memberInfoService.getMembers().subscribe((res) => {
      this.members = res;
    });
  }

  ngOnInit() {
  }

}
