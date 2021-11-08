import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MiddleLayoutComponent } from './components/middle-layout/middle-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LayoutComponent,
    MiddleLayoutComponent,
  ],
  exports: [
    LayoutComponent,
    MiddleLayoutComponent,
  ]
})
export class UiModule {}
