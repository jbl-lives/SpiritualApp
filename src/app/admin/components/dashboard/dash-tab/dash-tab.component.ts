import {  Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

interface TabItem {
  id: number;
  label: string;
}

@Component({
  selector: 'app-dash-tab',
  templateUrl: './dash-tab.component.html',
  styleUrl: './dash-tab.component.css'
})
export class DashTabComponent {

   @Input() tabItems: TabItem[] = [];
   @Input() tabContents: TemplateRef<any>[] = [];

   @Input() selectedTab: number = 0;

   @Input() dashHeader: string = 'header';

   @Output() tabSelected = new EventEmitter<number>(); // Create an output event

  selectTab(tabId: number): void {
    this.selectedTab = tabId;
    this.tabSelected.emit(tabId);
  } 

}
