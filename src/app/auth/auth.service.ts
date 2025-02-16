import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs'; // Import necessary RxJS operators
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = "http://localhost:5003/api";

  createUser(formData: any) {
    return this.http.post(this.baseUrl + '/signup', formData);
  }

  signIn(formData: any) {
    return this.http.post(this.baseUrl + '/signin', formData);
  }

  // Add a method to fetch the token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Example of an authenticated request
  createLeader(leaderData: FormData): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.baseUrl + '/leader', leaderData, { headers });
  }

  // New method to get user details
  getUserDetails(): Observable<any> { // Adjust the type of 'any' as needed
    const token = this.getToken();

    if (!token) {
      return of(null); // Return an observable of null if no token exists to avoid errors later
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + '/user/current', { headers }).pipe( // Correct: /api/user/current 
      tap((user) => console.log('User details fetched:', user)), // Optional: Log the user details
      catchError(this.handleError<any>('getUserDetails', null)) // Handle errors
    );
  }

  // Generic error handling function (reusable)
  private handleError<T>(operation = 'operation', result: T | null = null) {
    return (error: any): Observable<T> => {
      console.error(error); // Log the error to the console

      // Let the app keep running by returning an empty result
      return of(result as T); // Return the default value instead of throwing an error
    };
  }

  logout() {
    localStorage.removeItem('authToken'); // Or whatever key you use
  }

}
