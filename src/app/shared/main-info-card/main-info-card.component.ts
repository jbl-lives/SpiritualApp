import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-info-card',
  templateUrl: './main-info-card.component.html',
  styleUrl: './main-info-card.component.css'
})
export class MainInfoCardComponent {
  @Input() aboutInfo:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, beatae magni enim nostrum quos fugiat rerum quas laboriosam voluptatem praesentium quasi voluptatibus ut similique inventore? Voluptatem magni velit quos sunt Velit vel vitae, quaerat quoab non, voluptate"

}
