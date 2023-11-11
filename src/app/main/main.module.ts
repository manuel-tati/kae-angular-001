import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { SiderbarComponent } from './shared/components/siderbar.component';
import { SiderbarItemsComponent } from './shared/components/siderbar-items.component';

@NgModule({
  declarations: [LayoutComponent, SiderbarComponent, SiderbarItemsComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
