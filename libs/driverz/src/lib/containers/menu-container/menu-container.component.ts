import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {Store} from "@ngrx/store";
// eslint-disable-next-line
import {MenuStub} from '../../../../../ui/src/lib/components/menu/stubs';
// eslint-disable-next-line
import {IMenuItem} from '../../../../../ui/src/lib/components/menu/menu.component';

@Component({
  selector: 'driverz-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuContainerComponent {

  menu: IMenuItem[] = MenuStub;

  constructor(private store: Store) { }

  events($event: {event: string, data: any}) {
    if ($event.event === 'MenuComponent:MENU_CLICKED') {
      console.log($event.data);
      // this.store.dispatch(setResultQuery({menu: $event.data}));
    }
  }
}
