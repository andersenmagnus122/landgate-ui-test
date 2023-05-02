import {NgModule} from '@angular/core';
import { PersonNgrxComponent } from './person-ngrx.component'; 
import { CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [PersonNgrxComponent],
  exports: [PersonNgrxComponent],
  imports: [ CommonModule, BrowserModule, FormsModule, ReactiveFormsModule ]
})
export class PersonNgrxModule {
}
