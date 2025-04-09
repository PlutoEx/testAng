import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsForm2Component } from './steps-form2.component';

describe('StepsForm2Component', () => {
  let component: StepsForm2Component;
  let fixture: ComponentFixture<StepsForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
