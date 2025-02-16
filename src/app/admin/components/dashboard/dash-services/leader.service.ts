import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leader } from '../categories/dash-leaders/dash-leaders.component';

export interface LeaderResponse { // Define the interface
  totalCount: number;
  leaders: Leader[];
}

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  private apiUrl = 'http://localhost:5003/api/leader'; // Base API URL

  constructor(private http: HttpClient) {
    console.log("this.apiUrl:", this.apiUrl)
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Consistent key name
    console.log("Token in headers:", token); // Log token here as well
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  get ApiUrl(): string { // Getter (note the capital 'A' - convention for properties)
    return this.apiUrl;
  }
  // Fetch all leaders
  getLeaders(): Observable<LeaderResponse> { // Return the interface type
    return this.http.get<LeaderResponse>(this.apiUrl, { headers: this.getAuthHeaders() });
}

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  // Create a new leader
  createLeader(leader: Leader): Observable<Leader> {
    return this.http.post<Leader>(this.apiUrl, leader, { headers: this.getAuthHeaders() });
  }

  // Update an existing leader
  updateLeader(id: number, leaderData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Ensure proper string interpolation
    return this.http.put(url, leaderData, { headers: this.getAuthHeaders() });
  }

  // Delete a leader by ID
  deleteLeader(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() }); // Correct URL 
  }

  


  // Upload an image and return its path
  uploadImage(imageFile: File, leaderId: number): Observable<any> { // Return Observable<any>
    const formData = new FormData();
    formData.append('image', imageFile, imageFile.name); // Include filename

    return this.http.post(`${this.apiUrl}/${leaderId}/upload-image`, formData, { headers: this.getAuthHeaders() }); // Correct URL
  }
  
 
}
