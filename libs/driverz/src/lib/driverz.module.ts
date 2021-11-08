import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverzComponent } from './containers/driverz/driverz.component';
import { UiModule } from '@driverz/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromConfig from './+state/config/config.reducer';
import { ConfigEffects } from './+state/config/config.effects';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    StoreModule.forFeature(fromConfig.CONFIG_FEATURE_KEY, fromConfig.reducer),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  declarations: [DriverzComponent],
  exports: [DriverzComponent],
})
export class DriverzModule {}
