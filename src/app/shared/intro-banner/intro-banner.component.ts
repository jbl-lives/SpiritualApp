import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrl: './intro-banner.component.css'
})
export class IntroBannerComponent{

  @Input() title: string = "Title";
  @Input() message:string = "Message";
  @Input() background: string = '#fff';
  @Input() linerBackground: string = "#14181C";
  @Input() showLiner: boolean = true;
}
