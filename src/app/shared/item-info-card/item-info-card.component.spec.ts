import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoCardComponent } from './item-info-card.component';

describe('ItemInfoCardComponent', () => {
  let component: ItemInfoCardComponent;
  let fixture: ComponentFixture<ItemInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
