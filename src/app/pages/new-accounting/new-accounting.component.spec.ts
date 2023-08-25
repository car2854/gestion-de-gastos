import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountingComponent } from './new-accounting.component';

describe('NewAccountingComponent', () => {
  let component: NewAccountingComponent;
  let fixture: ComponentFixture<NewAccountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAccountingComponent]
    });
    fixture = TestBed.createComponent(NewAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
