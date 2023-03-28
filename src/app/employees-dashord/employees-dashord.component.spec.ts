import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDashordComponent } from './employees-dashord.component';

describe('EmployeesDashordComponent', () => {
  let component: EmployeesDashordComponent;
  let fixture: ComponentFixture<EmployeesDashordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDashordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesDashordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
