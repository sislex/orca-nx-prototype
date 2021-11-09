import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MiddleLayoutComponent } from './components/middle-layout/middle-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LayoutComponent,
    MiddleLayoutComponent,
    MenuComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent,
    MiddleLayoutComponent,
    MenuComponent,
    FooterComponent,
  ]
})
export class UiModule {}
