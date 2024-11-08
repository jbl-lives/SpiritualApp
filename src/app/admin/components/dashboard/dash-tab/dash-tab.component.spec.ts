import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTabComponent } from './dash-tab.component';

describe('DashTabComponent', () => {
  let component: DashTabComponent;
  let fixture: ComponentFixture<DashTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
