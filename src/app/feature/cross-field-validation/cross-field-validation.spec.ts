import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidation } from './cross-field-validation';

describe('CrossFieldValidation', () => {
  let component: CrossFieldValidation;
  let fixture: ComponentFixture<CrossFieldValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossFieldValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossFieldValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
