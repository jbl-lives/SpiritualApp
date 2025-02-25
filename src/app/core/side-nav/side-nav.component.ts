import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() items: any[] = []; // Keep same structure
  @Input() showSearch: boolean = true;
  @Input() categoryItem: string = '';
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory: string = '';

  ngOnInit(): void {
    // Nothing here anymore, since we handle changes in ngOnChanges
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryItem']) {
      this.selectedCategory = this.categoryItem || 'All';
      this.categorySelected.emit(this.selectedCategory);
    }
  }

  selectCategory(categoryItem: string): void {
    this.selectedCategory = categoryItem;
    this.categorySelected.emit(this.selectedCategory);
    console.log('Selected category:', this.selectedCategory);
  }
}
