import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaObraComponent } from './tarjeta-obra.component';

describe('TarjetaObraComponent', () => {
  let component: TarjetaObraComponent;
  let fixture: ComponentFixture<TarjetaObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaObraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
