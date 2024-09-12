import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-item-info-card',
  templateUrl: './item-info-card.component.html',
  styleUrl: './item-info-card.component.css'
})
export class ItemInfoCardComponent {

  @Input() itemTitle:string ="Rivers";
  @Input() itemMessage:string ="Money in candles"
  @Input() itembackground:string = "";
  @Input() itemBorder:string = "";
  @Input() itemLink:string = ""
  @Input() itemImage:string = "";
}
