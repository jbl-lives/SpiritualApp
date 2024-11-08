import { Component, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dash-gifts',
  templateUrl: './dash-gifts.component.html',
  styleUrls: ['./dash-gifts.component.css']
})
export class DashGiftsComponent implements AfterViewInit {
  tabItems = [
    { id: 0, label: 'Create New Gift' },
    { id: 1, label: 'View Gifts' }
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
 