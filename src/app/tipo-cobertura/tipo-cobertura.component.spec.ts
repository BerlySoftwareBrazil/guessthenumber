import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCoberturaComponent } from './tipo-cobertura.component';

describe('TipoCoberturaComponent', () => {
  let component: TipoCoberturaComponent;
  let fixture: ComponentFixture<TipoCoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
