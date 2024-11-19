import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLeadersComponent } from './dash-leaders.component';

describe('DashLeadersComponent', () => {
  let component: DashLeadersComponent;
  let fixture: ComponentFixture<DashLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
