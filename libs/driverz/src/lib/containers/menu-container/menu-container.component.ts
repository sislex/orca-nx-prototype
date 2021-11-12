import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {setMenu} from '../../+state/view/view.actions';
import {getMenu} from '../../+state/view/view.selectors';

@Component({
  selector: 'driverz-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuContainerComponent {
  getMenu$ = this.store.pipe(select(getMenu));

  constructor(private store: Store) { }

  events($event: {event: string, data: any}) {
    if ($event.event === 'MenuComponent:MENU_CLICKED') {
      this.store.dispatch(setMenu({menu: $event.data}));
    }
  }
}
