import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
// eslint-disable-next-line
import {Columns, RowData} from '../../../../../grid/src/lib/components/grid/stabs';
import {Store} from "@ngrx/store";

@Component({
  selector: 'driverz-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridContainerComponent {

  columns = Columns;
  rowData = RowData;

  constructor(private store: Store) { }

}
