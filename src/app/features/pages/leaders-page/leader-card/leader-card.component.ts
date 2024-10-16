import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leader-card',
  templateUrl: './leader-card.component.html',
  styleUrl: './leader-card.component.css'
})
export class LeaderCardComponent {
 @Input() leaderName:string = "Strong Sangoma"
 @Input() leaderImage:string = "";
}
