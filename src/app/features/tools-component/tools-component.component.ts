import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tools-component',
  templateUrl: './tools-component.component.html',
  styleUrl: './tools-component.component.css'
})
export class ToolsComponentComponent {
  @ViewChild('slider', { read: ElementRef }) slider: ElementRef | undefined;

  scrollLeft() {
    this.slider?.nativeElement.scrollBy({
      left: -500,  // Scrolls 300px to the left
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.slider?.nativeElement.scrollBy({
      left: 500,  // Scrolls 300px to the right
      behavior: 'smooth'
    });
  }
}
