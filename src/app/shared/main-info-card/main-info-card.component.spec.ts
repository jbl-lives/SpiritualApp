import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoCardComponent } from './main-info-card.component';

describe('MainInfoCardComponent', () => {
  let component: MainInfoCardComponent;
  let fixture: ComponentFixture<MainInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
