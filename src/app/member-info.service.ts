import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CardType } from './card-type';
import { Observable } from 'rxjs';
import { Member } from './member';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'token'
  })
};
@Injectable({
  providedIn: 'root'
})
// 会员模块服务类
export class MemberInfoService {
  serviceUrl = 'http://192.168.43.66:8080/member/'; // 服务端地址
  constructor(private httpClient: HttpClient) {
  }
  /**
   * HttpClient发送异步(基于Promise)的网络请求,返回可观察对象
   * 会员卡类型信息
   */
  getCardType(): Observable<CardType[]> {
    return this.httpClient.get<CardType[]>(this.serviceUrl + 'getCardTypes');
  }

  /**
   * 所有会员
   */
  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.serviceUrl + 'getMembers');
  }
}
