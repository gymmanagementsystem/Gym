import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 路由模块
import { RouterModule, Routes } from '@angular/router';
// 网络通信模块
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitComponent } from './visit/visit.component';
import { MemberInfoComponent } from './member-info/member-info.component';
import { CardTypeComponent } from './card-type/card-type.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MemberInfoService } from './member-info.service';

const appRoutes: Routes = [
  { path: 'cardType', component: CardTypeComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'memberInfo', component: MemberInfoComponent },
  { path: 'analysis', component: AnalysisComponent },
  {
    path: '',
    redirectTo: '/memberInfo',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    MemberInfoComponent,
    CardTypeComponent,
    AnalysisComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [MemberInfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
