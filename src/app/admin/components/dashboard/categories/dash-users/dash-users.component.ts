import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../dash-services/user.service';
import { map } from 'rxjs/operators'

export interface User {  // Interface inside the class (if you must)
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface UserResponse {  // Define interface for the API response
  totalCount: number;
  users: User[]; // Array of User objects
}


@Component({
  selector: 'app-dash-users',
  templateUrl: './dash-users.component.html',
  styleUrl: './dash-users.component.css'
})


export class DashUsersComponent implements OnInit {
  users: any[] = []; // Or your User interface
  p: number = 1; // Current page
  pageSize: number = 7;
  totalUsers: number = 0;
  currentPage: number = 1; // Define currentPage
  totalPages: number = 0; // Define totalPages

  constructor(private userService: UserService) { }

  ngOnInit(): void { 
    this.getUsers();
  }


  getUsers() {
    this.userService.getUsers(this.currentPage, this.pageSize).pipe(
        map((response: UserResponse) => { // Type the response here!
            const usersWithId = response.users.map((user, index) => ({
                ...user,
                id: user.id ?? index.toString() // Convert index to string if needed
            }));
            return { ...response, users: usersWithId };
        })
    ).subscribe(response => {
      console.log("Received Users:", response.users);
        this.users = response.users;
        this.totalUsers = response.totalCount;
        this.totalPages = Math.ceil(this.totalUsers / this.pageSize);
    });
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getUsers();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getUsers();
    }
  }

  deleteUser(id: string | null | undefined) { // Accept null or undefined
    if (!id) {
        console.error("User ID is missing!"); // Log an error
        return; // Don't proceed with the delete operation
    }

    if (confirm("Are you sure you want to delete this user?")) {
        this.userService.deleteUser(id).subscribe({ // id will now be a string
            next: () => {
                console.log("User deleted successfully");
                this.getUsers();
            },
            error: (error: any) => {
                console.error("Error deleting user:", error);
            }
        });
    }
}

  
}