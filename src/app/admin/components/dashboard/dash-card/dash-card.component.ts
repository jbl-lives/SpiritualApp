import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrl: './dash-card.component.css'
})
export class DashCardComponent {
  @Input() cardTitle:string = "Title";
  @Input() cardNumber:string = "00"
}
