import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrl: './loading-indicator.component.css'
})
export class LoadingIndicatorComponent {

  isLoading: boolean = false; // Initially hidden

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }
}
