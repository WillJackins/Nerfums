import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractActiveListComponent } from './contract-active-list.component';

describe('ContractActiveListComponent', () => {
  let component: ContractActiveListComponent;
  let fixture: ComponentFixture<ContractActiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractActiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
