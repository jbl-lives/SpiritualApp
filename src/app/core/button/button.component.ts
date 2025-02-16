import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() link:string = "";
  @Input() buttonText: string = 'Click Me';
  @Input() color: string = '#fff';
  @Input() backgroundColor: string = '#0f1923';
  @Input() borderColor: string = '#827d7d';
  @Input() hoverBackgroundColor: string = '#BF9C7D';
  @Input() hoverColor: string = '#0f1923';
  @Input() width: string = 'auto';

  @HostBinding('style.--color') get buttonColor() {
    return this.color;
  }

  @HostBinding('style.--background-color') get bgColor() {
    return this.backgroundColor;
  }

  @HostBinding('style.--border-color') get bColor() {
    return this.borderColor;
  }

  @HostBinding('style.--hover-background-color') get hoverBgColor() {
    return this.hoverBackgroundColor;
  }

  @HostBinding('style.--hover-color') get hColor() {
    return this.hoverColor;
  }

  @Input() isSubmit: boolean | undefined = undefined;
    @Output() buttonClicked = new EventEmitter<void>(); // Output for custom clicks
    @Input() disabled: boolean = false; // Add disabled input

    onClick(): void {
        if (!this.isSubmit) { // Only emit if it's not a submit button
            this.buttonClicked.emit();
        }
    }

}
