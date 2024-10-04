import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.css'
})
export class GiftComponent {

  @Input() giftTitle:string = "Inyanga/Sangoma"
  @Input() giftImage:string = ""
  @Input() giftInfo: string = `These are some of the popular leaders in the African Spirituality
  Money on the streeeete only `
  

}
