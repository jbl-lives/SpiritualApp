import { Component } from '@angular/core';

@Component({
  selector: 'app-leaders-page',
  templateUrl: './leaders-page.component.html',
  styleUrl: './leaders-page.component.css'
})
export class LeadersPageComponent {
  leadersCategories: string[] = ['Traditional Healer', 'Prophetic', 'Medium', 'Seer'];
}
