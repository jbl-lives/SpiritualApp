import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  selectedCategory: string = '';
  
  @Input() userName:string = "John";
  @Input() userSurname:string = "Doe";
  @Input() userImageLink:string = "../../../../../assets/images/leaders/lloyd.jpg";

  dashboardItems = [
    { item: 'Gifts', image: '../../../../assets/icons/dashboard/products.png', backgroundColor :'#313e48' },
    { item: 'Tools', image: '../../../../assets/icons/dashboard/tools.png', backgroundColor :'#313e48'},
    { item: 'Leaders', image: '../../../../assets/icons/dashboard/leaders.png' , backgroundColor :'#313e48'},
    { item: 'Users', image: '../../../../assets/icons/dashboard/users.png' , backgroundColor :'#313e48'}
  ];

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
  }
  
}


