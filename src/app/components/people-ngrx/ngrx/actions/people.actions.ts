import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
export const SAVE_PERSON = '[People] Save Person';
import {PersonModel} from '../../../../models/person-model';

// This is a request
export const loadPeoples = createAction(
  '[People] Load Peoples'
);

// This is a load success
export const loadedPeople = createAction(
  '[People] Loaded',
  (people: PersonModel[]) => ({people})
)

export class SavePerson implements Action {
  readonly type = SAVE_PERSON;

  constructor(public payload: PersonModel) {}
}

export type PeopleActions = SavePerson;


