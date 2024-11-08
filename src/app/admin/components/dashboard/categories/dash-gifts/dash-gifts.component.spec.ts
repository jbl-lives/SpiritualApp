import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashGiftsComponent } from './dash-gifts.component';

describe('DashGiftsComponent', () => {
  let component: DashGiftsComponent;
  let fixture: ComponentFixture<DashGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
