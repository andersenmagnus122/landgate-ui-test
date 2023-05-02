import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonModel } from '../../models/person-model';
 @Component({
  selector: 'app-person-ngrx',
  templateUrl: './person-ngrx.component.html',
  styleUrls: [ './person-ngrx.component.scss' ]
})
export class PersonNgrxComponent {
  @Input() person: PersonModel;
  @Output() save = new EventEmitter<PersonModel>();
  @Output() cancel = new EventEmitter<void>();
   editedPerson: PersonModel;
   editPerson() {
    this.editedPerson = { ...this.person };
  }
   savePerson() {
    this.save.emit(this.editedPerson);
    this.editedPerson = null;
  }
   cancelEdit() {
    this.cancel.emit();
    this.editedPerson = null;
  }
}