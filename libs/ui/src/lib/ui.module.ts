import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MiddleLayoutComponent } from './components/middle-layout/middle-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule, MatFormFieldModule, MatIconModule, FormsModule,

    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    LayoutComponent,
    MiddleLayoutComponent,
    MenuComponent,
    FooterComponent,
    GridLayoutComponent,
    HeaderComponent,
    SearchComponent,
  ],
  exports: [
    LayoutComponent,
    MiddleLayoutComponent,
    MenuComponent,
    FooterComponent,
    GridLayoutComponent,
    HeaderComponent,
    SearchComponent,
  ]
})
export class UiModule {}
