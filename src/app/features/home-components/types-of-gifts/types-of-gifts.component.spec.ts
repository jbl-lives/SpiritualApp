import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfGiftsComponent } from './types-of-gifts.component';

describe('TypesOfGiftsComponent', () => {
  let component: TypesOfGiftsComponent;
  let fixture: ComponentFixture<TypesOfGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesOfGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesOfGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
