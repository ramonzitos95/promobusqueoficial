import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocoesListComponent } from './pomocoes-list.component';

describe('PromocoesListComponent', () => {
  let component: PromocoesListComponent;
  let fixture: ComponentFixture<PromocoesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocoesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
