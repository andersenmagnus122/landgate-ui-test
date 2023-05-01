import { Injectable } from '@angular/core';
import { PersonModel } from '../models/person-model';
 @Injectable({
  providedIn: 'root'
})

export class PeopleService {

   private mockPeopleList: PersonModel[] = [
    { firstName: 'John', lastName: 'Doe', age: 21, workTitle: 'Wanna be Signer' },
    { firstName: 'Jane', lastName: 'Doe', age: 22, workTitle: 'Signer' },
    { firstName: 'Bob', lastName: 'Barker', age: 80, workTitle: 'TV Host' },
    { firstName: 'John', lastName: 'Doe', age: 21, workTitle: 'Wanna be Signer' }
  ].map(data => new PersonModel(data));

   constructor() { }

   getPeople(): PersonModel[] {
    return this.mockPeopleList;
  }
}