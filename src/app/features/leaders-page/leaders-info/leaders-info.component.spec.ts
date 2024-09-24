import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersInfoComponent } from './leaders-info.component';

describe('LeadersInfoComponent', () => {
  let component: LeadersInfoComponent;
  let fixture: ComponentFixture<LeadersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadersInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
