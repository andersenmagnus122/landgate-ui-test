import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { PersonModel } from '../../models/person-model';

 @Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {

  people: PersonModel[];
  selectedPerson: PersonModel;
  originalPerson: PersonModel;

  constructor(private peopleService: PeopleService) { }

  async ngOnInit() {
    const res = this.peopleService.getPeople();
    this.people = await res.map((person) => {
      return {firstName: person.firstName, lastName: person.lastName, age: person.age, workTitle: person.workTitle}
    });
  }

  editPerson(person: PersonModel) {
    this.selectedPerson = {...person};
    this.originalPerson = person;
  }

  savePerson() {
    // Replace the original person with the edited person
    const index = this.people.findIndex((person) => person === this.originalPerson);
    this.people[index] = this.selectedPerson;
    // Clear the selected and original persons
    this.selectedPerson = null;
    this.originalPerson = null;
  }

  cancelEdit() {
    // Reset the selected person to the original person
    const index = this.people.findIndex((person) => person === this.originalPerson);
    this.selectedPerson = null;
    this.originalPerson = null;
  }

}