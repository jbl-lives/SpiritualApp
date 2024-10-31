import { Component, Input } from '@angular/core';

interface SideNavItem {
  item: string;
  image: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'] // Note: changed to 'styleUrls'
})
export class SideNavComponent {
  @Input() items: SideNavItem[] = []; // Array of objects with `item` and `image` properties
}

