import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person-model';
import { SavePerson } from './ngrx/actions/people.actions';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {
  people$: Observable<PersonModel[]>;
  selectedPerson: PersonModel;

  constructor(private store: Store<{ people: { people: PersonModel[] } }>) {
    this.people$ = store.select('people', 'people');
  }

  ngOnInit() {}

  onEdit(person: PersonModel) {
    this.selectedPerson = person;
  }

  onSave(person: PersonModel) {
    this.store.dispatch(new SavePerson(person));
    this.selectedPerson = null;
  }

  onCancel() {
    this.selectedPerson = null;
  }
}