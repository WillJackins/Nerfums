import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCompleteComponent } from './contract-complete.component';

describe('ContractCompleteComponent', () => {
  let component: ContractCompleteComponent;
  let fixture: ComponentFixture<ContractCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
