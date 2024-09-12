import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrl: './tool-card.component.css'
})
export class ToolCardComponent {

  @Input() header:string ="";
  @Input() message:string ="Money in candles"
  @Input() link:string = "";
  @Input() imageLink:string = "";
}
