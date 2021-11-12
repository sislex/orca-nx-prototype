import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
export interface IMenuItem {
  icon: string,
  text: string,
  isActive?: boolean,
}

@Component({
  selector: 'driverz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input() menu: IMenuItem[] | null = [];
  @Output() emitter = new EventEmitter();

  menuClick(menuItem: IMenuItem, menu: IMenuItem[] | null = this.menu) {
    const newMenu = menu?.map((item: IMenuItem) => ({...item, isActive: item === menuItem}));
    this.emitter.emit({
      event: 'MenuComponent:MENU_CLICKED',
      data: newMenu
    });
  }
}
