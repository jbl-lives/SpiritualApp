import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dash-navigation',
  templateUrl: './dash-navigation.component.html',
  styleUrl: './dash-navigation.component.css'
})
export class DashNavigationComponent {
  @Input() userName:string = "John";
  @Input() userSurname:string = "Doe";
  @Input() userImageLink:string = "../../../../../assets/images/leaders/lloyd.jpg";
  

}
