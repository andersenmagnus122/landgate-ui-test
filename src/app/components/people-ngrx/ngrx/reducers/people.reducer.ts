import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { PersonModel } from '../../../../models/person-model';
import { PeopleService } from '../../../../services/people.service'

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {
  people: PersonModel[];
  loading: boolean;
}

export const initialState: State = {
  people: [
    { firstName: 'John', lastName: 'Doe', age: 21, workTitle: 'Wanna be Signer' },
    { firstName: 'Jane', lastName: 'Doe', age: 22, workTitle: 'Signer' },
    { firstName: 'Bob', lastName: 'Barker', age: 80, workTitle: 'TV Host' },
    { firstName: 'John', lastName: 'Doe', age: 21, workTitle: 'Wanna be Signer' }
  ],
  loading: false,
};


export const reducer = createReducer(
  initialState,

  on(PeopleActions.loadPeoples, state => ({ ...state, loading: true })),
  on(PeopleActions.loadedPeople, (state, { people }) => ({
    ...state,
    people,
    loading: false,
  })),
  
);

