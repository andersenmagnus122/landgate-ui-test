import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNgrxComponent } from './person-ngrx.component';

describe('PersonNgrxComponent', () => {
  let component: PersonNgrxComponent;
  let fixture: ComponentFixture<PersonNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
