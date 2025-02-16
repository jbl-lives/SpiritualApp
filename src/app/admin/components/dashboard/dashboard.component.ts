import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userName: string = '';
  userSurname: string = '';
  selectedCategory: string = '';

  constructor(private router: Router, private authService: AuthService){}
  
  ngOnInit(): void { // Implement ngOnInit
      this.getUserDetails();
  }
  

  dashboardItems = [
    { item: 'Gifts', image: '../../../../assets/icons/dashboard/products.png', backgroundColor :'#313e48' },
    { item: 'Tools', image: '../../../../assets/icons/dashboard/tools.png', backgroundColor :'#313e48'},
    { item: 'Leaders', image: '../../../../assets/icons/dashboard/leaders.png' , backgroundColor :'#313e48'},
    { item: 'Users', image: '../../../../assets/icons/dashboard/users.png' , backgroundColor :'#313e48'}
  ];


  getUserDetails() {
    this.authService.getUserDetails().subscribe({ // This is in the COMPONENT
        next: (user: any) => { // Type 'user' properly (e.g., UserDto)
            if (user) { // Check for null (important due to error handling)
                console.log("User from API:", user); // Check the console
                this.userName = user.firstName; // Or user.FirstName, adjust to your DTO
                this.userSurname = user.lastName; // Or user.LastName
            } else {
                this.userName = "User";
                this.userSurname = "";
            }
        },
        error: (error) => {
            console.error("Error fetching user details:", error);
            this.userName = "User"; // Default name
            this.userSurname = "";
        }
    });
}

  // Helper function to decode JWT (you might already have this)
  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Basic decoding - improve as needed
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  }



  onCategorySelected(category: string): void {
    this.selectedCategory = category;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login-page')
  }
  
}


