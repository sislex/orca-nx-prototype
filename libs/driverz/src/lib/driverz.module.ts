import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverzComponent } from './containers/driverz/driverz.component';
import { UiModule } from '@driverz/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromConfig from './+state/config/config.reducer';
import { ConfigEffects } from './+state/config/config.effects';
import {GridModule} from "@driverz/grid";
import { GridContainerComponent } from './containers/grid-container/grid-container.component';
import { MenuContainerComponent } from './containers/menu-container/menu-container.component';
import {VIEW_FEATURE_KEY, viewReducer} from "./+state/view/view.reducer";
import {ViewEffects} from "./+state/view/view.effects";

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    GridModule,
    StoreModule.forFeature(fromConfig.CONFIG_FEATURE_KEY, fromConfig.reducer),
    EffectsModule.forFeature([ConfigEffects]),
    StoreModule.forFeature(VIEW_FEATURE_KEY, viewReducer),
    EffectsModule.forFeature([ViewEffects]),

  ],
  declarations: [DriverzComponent, GridContainerComponent, MenuContainerComponent],
  exports: [DriverzComponent],
})
export class DriverzModule {}
