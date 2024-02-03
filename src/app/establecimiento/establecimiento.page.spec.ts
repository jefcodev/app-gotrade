import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablecimientoPage } from './establecimiento.page';

describe('EstablecimientoPage', () => {
  let component: EstablecimientoPage;
  let fixture: ComponentFixture<EstablecimientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstablecimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
