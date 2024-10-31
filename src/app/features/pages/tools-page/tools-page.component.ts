import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrl: './tools-page.component.css'
})
export class ToolsPageComponent {

  toolsItems = [
    { item: 'Candles', image: '../../../../assets/icons/candle.png' , backgroundColor :'#313e48'},
    { item: 'Cloths', image: '../../../../assets/icons/cloths.png' , backgroundColor :'#313e48' },
    { item: 'Divination Tools', image: '../../../../assets/icons/divination.png' , backgroundColor :'#313e48' },
    { item: 'Drinks', image: '../../../../assets/icons/water-glass.png', backgroundColor :'#313e48'}
  ];

}
