import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsComponentComponent } from './tools-component.component';

describe('ToolsComponentComponent', () => {
  let component: ToolsComponentComponent;
  let fixture: ComponentFixture<ToolsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
