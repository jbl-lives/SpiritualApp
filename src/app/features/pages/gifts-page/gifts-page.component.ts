import { Component } from '@angular/core';

@Component({
  selector: 'app-gifts-page',
  templateUrl: './gifts-page.component.html',
  styleUrls: ['./gifts-page.component.css'] // Note the 'styleUrls' instead of 'styleUrl'
})
export class GiftsPageComponent {
  giftItems = [
    { item: 'Traditional Healer', image: '../../../../assets/icons/gifts/sangoma-light.png', backgroundColor :'#ab3424' },
    { item: 'Prophetic', image: '../../../../assets/icons/gifts/prophetic-light.png', backgroundColor :'#005c86'},
    { item: 'Psychic', image: '../../../../assets/icons/gifts/medium-light.png' , backgroundColor :'#ba5400'},
    { item: 'Seer', image: '../../../../assets/icons/gifts/seer-light.png' , backgroundColor :'#7a74a7'}
  ];
}
