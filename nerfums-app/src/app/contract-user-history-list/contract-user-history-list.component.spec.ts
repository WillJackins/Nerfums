import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUserHistoryListComponent } from './contract-user-history-list.component';

describe('ContractUserHistoryListComponent', () => {
  let component: ContractUserHistoryListComponent;
  let fixture: ComponentFixture<ContractUserHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractUserHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUserHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
