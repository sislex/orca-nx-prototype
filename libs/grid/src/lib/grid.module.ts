import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import {AgGridModule} from "ag-grid-angular";
import {UiModule} from "@driverz/ui";

@NgModule({
  imports: [CommonModule, AgGridModule, UiModule],
  declarations: [
    GridComponent,
  ],
  exports: [
    GridComponent,
    AgGridModule,
  ]
})
export class GridModule {}
