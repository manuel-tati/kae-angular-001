import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { FollowBarComponent } from './shared/components/follow-bar.component';
import { HeaderComponent } from './shared/components/header.component';
import { SiderbarItemsComponent } from './shared/components/siderbar-items.component';
import { SiderbarComponent } from './shared/components/siderbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SiderbarComponent,
    SiderbarItemsComponent,
    HeaderComponent,
    FollowBarComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
