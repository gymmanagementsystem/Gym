import { Component, OnInit } from '@angular/core';
import { CardType } from '../card-type';
import { MemberInfoService } from '../member-info.service';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.css']
})
export class CardTypeComponent implements OnInit {

  cardTypes: Array<CardType>; // 所有会员卡类型
  constructor(private memberService: MemberInfoService) {
    // 获得会员卡类型
    memberService.getCardType().subscribe((res) => {
      this.cardTypes = res;
    });
  }

  ngOnInit() {
  }

}
