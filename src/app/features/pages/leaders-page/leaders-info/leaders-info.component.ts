import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leaders-info',
  templateUrl: './leaders-info.component.html',
  styleUrl: './leaders-info.component.css'
})
export class LeadersInfoComponent {
  @Input() leaderName:string ="Gogo Dineo Nhlanzi";
  @Input() profession:string = "Sangoma"
  @Input() socialLinks: string[] = [];
  @Input() leaderInformation:string="Candles are considered the starting point of connecting with the spiritual realm. Because of their universal nature they are considered safe especially the white candle.  spiritual realm. Because of their universal nature they are considered safe especially the white candle.";
}
