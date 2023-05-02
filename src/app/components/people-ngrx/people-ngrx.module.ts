import {NgModule} from '@angular/core';
import {PeopleNgrxComponent} from './people-ngrx.component';
import { CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromPeople from './ngrx/reducers/people.reducer';
import {PeopleEffects} from './ngrx/effects/people.effects';
import { PersonNgrxComponent } from '../person-ngrx/person-ngrx.component';
import { PersonNgrxModule } from '../person-ngrx/person-ngrx.module';

@NgModule({
  declarations: [PeopleNgrxComponent],
  exports: [PeopleNgrxComponent],
  imports: [ StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer), PersonNgrxModule, EffectsModule.forFeature([PeopleEffects]), CommonModule]
})
export class PeopleNgrxModule {
}
