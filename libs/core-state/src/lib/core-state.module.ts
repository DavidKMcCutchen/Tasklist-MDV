import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CoreDataModule } from "@tasklist/core-data";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { TasksEffects } from "./tasks/tasks.effects";
import { reducers } from '.';

const store_name = 'Tasklist Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
}

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([TasksEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
],
providers: []
})
export class CoreStateModule {}
