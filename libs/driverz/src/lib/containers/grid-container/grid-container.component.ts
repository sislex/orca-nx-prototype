import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
// eslint-disable-next-line
import {Columns, RowData} from '../../../../../grid/src/lib/components/grid/stabs';
import {select, Store} from "@ngrx/store";
import {getMenu, getSelectedMenuText} from "../../+state/view/view.selectors";
import {setMenu} from "../../+state/view/view.actions";

@Component({
  selector: 'driverz-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridContainerComponent {
  getSelectedMenuText$ = this.store.pipe(select(getSelectedMenuText));

  columns = Columns;
  rowData = RowData;

  constructor(private store: Store) { }

  events($event: {event: string, data: any}) {
    if ($event.event === 'SearchComponent:SEARCH_CHANGED') {
      console.log($event.data);
    }
  }
}
