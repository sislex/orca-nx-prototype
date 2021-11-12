import {Component, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {select} from "@ngrx/store";
import {getMenu} from "../../../../../driverz/src/lib/+state/view/view.selectors";

@Component({
  selector: 'driverz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() emitter = new EventEmitter();
  value = '';

  change(value: string) {
    this.emitter.emit({
      event: 'SearchComponent:SEARCH_CHANGED',
      data: value
    });
  }
}
