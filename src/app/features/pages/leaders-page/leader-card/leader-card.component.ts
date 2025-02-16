import { Component, Input } from '@angular/core';

interface LeaderItems{
  name: string;
  image: string;
  giftColor: string;
  bio: string;
  socials: string[];
}

@Component({
  selector: 'app-leader-card',
  templateUrl: './leader-card.component.html',
  styleUrl: './leader-card.component.css'
})
export class LeaderCardComponent {
 @Input() leaders: LeaderItems[] = [];
 @Input() leader!: LeaderItems; // For a single leader

 showLeader(){
  console.log("Leader clicked")
 }


}
