import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSchema } from './dynamic-schema';

describe('DynamicSchema', () => {
  let component: DynamicSchema;
  let fixture: ComponentFixture<DynamicSchema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSchema],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicSchema);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
