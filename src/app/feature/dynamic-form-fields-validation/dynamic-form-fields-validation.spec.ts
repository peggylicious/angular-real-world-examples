import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormFieldsValidation } from './dynamic-form-fields-validation';

describe('DynamicFormFieldsValidation', () => {
  let component: DynamicFormFieldsValidation;
  let fixture: ComponentFixture<DynamicFormFieldsValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormFieldsValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormFieldsValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
