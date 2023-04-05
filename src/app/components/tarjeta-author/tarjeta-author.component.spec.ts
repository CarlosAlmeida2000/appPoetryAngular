import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAuthorComponent } from './tarjeta-author.component';

describe('TarjetaAuthorComponent', () => {
  let component: TarjetaAuthorComponent;
  let fixture: ComponentFixture<TarjetaAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
