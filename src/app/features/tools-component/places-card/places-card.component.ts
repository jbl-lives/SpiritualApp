import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-places-card',
  templateUrl: './places-card.component.html',
  styleUrls: ['./places-card.component.css']  // <-- Should be "styleUrls"
})
export class PlacesCardComponent {
  isHovered: boolean = false;

  @Input() placesCardBackground: string = '';
  @Input() placeTitle: string = 'Place';
  @Input() placeInfo: string = 'Money makes the whole world go round and so does hello world as a programmer makes money';
  @Input() placeLink: string = '';  // Make sure you set this input value

  // Set hover state on mouse enter
  onMouseEnter() {
    this.isHovered = true;
  }

  // Reset hover state on mouse leave
  onMouseLeave() {
    this.isHovered = false;
  }
}
