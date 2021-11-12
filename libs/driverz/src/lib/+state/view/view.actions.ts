import { createAction, props } from '@ngrx/store';
// eslint-disable-next-line
import {IMenuItem} from '../../../../../ui/src/lib/components/menu/menu.component';

export const setMenu = createAction('[View] setMenu', props<{ menu: IMenuItem[] }>());




