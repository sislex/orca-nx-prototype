import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromView from './view.reducer';
import {ViewState} from './view.reducer';

export const selectViewState = createFeatureSelector<fromView.ViewState>(
  fromView.VIEW_FEATURE_KEY
);

export const getMenu = createSelector(
  selectViewState,
  (state: ViewState) => state.menu
);

export const getSelectedMenuText = createSelector(
  selectViewState,
  (state: ViewState) => state.menu.find(menuItem => menuItem.isActive)?.text
);
