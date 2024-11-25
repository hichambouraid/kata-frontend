import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceDescriptionComponent } from './exercice-description.component';

describe('ExerciceDescriptionComponent', () => {
  let component: ExerciceDescriptionComponent;
  let fixture: ComponentFixture<ExerciceDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceDescriptionComponent]
    });
    fixture = TestBed.createComponent(ExerciceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
