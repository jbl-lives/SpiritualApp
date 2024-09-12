import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.css'
})
export class ContentBoxComponent {

  @Input() title:string = "Dreams";
  @Input() message:string = "Money";
  @Input() background:string = "";
  @Input() link:string = "";
}
