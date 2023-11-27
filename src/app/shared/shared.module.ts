import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, SidenavComponent],
})
export class SharedModule { }
