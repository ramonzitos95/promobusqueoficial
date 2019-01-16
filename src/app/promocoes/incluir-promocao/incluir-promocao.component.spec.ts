import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirPromocaoComponent } from './incluir-promocao.component';

describe('IncluirPromocaoComponent', () => {
  let component: IncluirPromocaoComponent;
  let fixture: ComponentFixture<IncluirPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
