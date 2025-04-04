import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFormComponent } from './steps-form.component';

describe('StepsFormComponent', () => {
  let component: StepsFormComponent;
  let fixture: ComponentFixture<StepsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
