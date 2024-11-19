import { Component, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-dash-leaders',
  templateUrl: './dash-leaders.component.html',
  styleUrl: './dash-leaders.component.css'
})
export class DashLeadersComponent {

  tabItems = [
    { id: 0, label: 'Create New Leader' },
    { id: 1, label: 'View Leaders' }
  ];

  tabContentTemplates: TemplateRef<any>[] = [];

  @ViewChild('firstTabContent') firstTabContent!: TemplateRef<any>;
  @ViewChild('secondTabContent') secondTabContent!: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tabContentTemplates = [this.firstTabContent, this.secondTabContent];
    this.cdr.detectChanges(); // Trigger change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
  }

}
