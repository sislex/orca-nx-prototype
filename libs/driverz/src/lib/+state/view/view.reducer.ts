import { Action, createReducer, on } from '@ngrx/store';
import * as ViewActions from './view.actions';
// eslint-disable-next-line
import {IMenuItem} from '../../../../../ui/src/lib/components/menu/menu.component';
// eslint-disable-next-line
import {MenuStub} from '../../../../../ui/src/lib/components/menu/stubs';

export const VIEW_FEATURE_KEY = 'view';

export interface ViewState {
  menu: IMenuItem[],
  focusedID: string,
}

export const initialState: ViewState = {
  menu: MenuStub,
  focusedID: '',
};

export const viewReducer = createReducer(
  initialState,

  on(ViewActions.setMenu, (state, { menu }) => ({...state, menu})),

);

