import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleComponent } from './people.component';
 @NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BrowserModule],
  exports: [PeopleComponent]
})
export class PeopleModule { }