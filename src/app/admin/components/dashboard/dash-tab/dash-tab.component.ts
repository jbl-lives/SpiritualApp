import {  Component, Input, TemplateRef } from '@angular/core';

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

  selectedTab: number = 0 ;

  selectTab(tabId: number): void {
    this.selectedTab = tabId;
  }

  

}
