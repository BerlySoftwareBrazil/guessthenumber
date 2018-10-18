import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaCorretoraComponent } from './cobertura-corretora.component';

describe('CoberturaCorretoraComponent', () => {
  let component: CoberturaCorretoraComponent;
  let fixture: ComponentFixture<CoberturaCorretoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoberturaCorretoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoberturaCorretoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
