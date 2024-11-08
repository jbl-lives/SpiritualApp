import {  Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
export class SideNavComponent implements OnInit {
  @Input() items: SideNavItem[] = []; // Array of objects with `item` and `image` properties
  @Input() showSearch: boolean = true; // to show the search bar
  @Input() categoryItem: string = '';
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory: string = '';

  ngOnInit(): void {
    this.selectedCategory = this.categoryItem || (this.items.length > 0 ? this.items[0].item : '');
    this.categorySelected.emit(this.selectedCategory); // Emit default category on init
  }
  
  selectCategory(categoryItem: string): void {
    this.selectedCategory = categoryItem;
    this.categorySelected.emit(this.selectedCategory); // Emit selected category
    console.log('Selected category:', this.selectedCategory);
  }
}

