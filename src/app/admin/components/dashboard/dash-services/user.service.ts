import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../categories/dash-users/dash-users.component';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:5003/api'; // Your API base URL

  constructor(private http: HttpClient) { }

  getUsers(page: number = 1, pageSize: number = 10): Observable<any> { // Return type any
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.baseUrl}/user/users?page=${page}&pageSize=${pageSize}`, { headers }).pipe(
      tap(response => console.log('fetched users:', response)), // Log the whole response
      catchError(this.handleError<any>('getUsers', { totalCount: 0, users: [] })) // Handle errors with correct case
      
    );   
  }

  deleteUser(id: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });

    const url = `${this.baseUrl}/User/users/${id}`; // <-- Correct URL construction

    console.log("Delete URL:", url); // Log the URL

    return this.http.delete(url, { headers }).pipe(
        tap(_ => console.log(`deleted user with id=${id}`)),
        catchError(this.handleError<any>('deleteUser'))
    );
}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}