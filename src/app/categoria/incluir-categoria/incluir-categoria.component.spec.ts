import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCategoriaComponent } from './incluir-categoria.component';

describe('IncluirCategoriaComponent', () => {
  let component: IncluirCategoriaComponent;
  let fixture: ComponentFixture<IncluirCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
