import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Tool } from '../dash-models/tool.model';
import { ToolResponse } from '../dash-models/tool.model';

@Injectable({
    providedIn: 'root'
})
export class ToolService {
    private apiUrl = 'http://localhost:5003/api/tool'; // Base API URL

    constructor(private http: HttpClient) {}

    get ApiUrl(): string {
        return this.apiUrl;
    }

    private getAuthHeaders(): HttpHeaders {
        const token = localStorage.getItem('authToken');
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    getTool(id: number): Observable<Tool> {
        return this.http.get<Tool>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }

    getTools(page: number = 1, pageSize: number = 10): Observable<ToolResponse> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());

        console.log("Fetching tools from:", `${this.apiUrl}?${params.toString()}`); // Debugging

        return this.http.get<ToolResponse>(this.apiUrl, { headers: this.getAuthHeaders(), params }).pipe(
            catchError(this.handleError)
        );
    }

    createTool(formData: FormData): Observable<any> {
        return this.http.post<Tool>(this.apiUrl, formData, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }

    updateTool(id: number, tool: any): Observable<any> { // Use 'any' or a more specific type
        return this.http.put(`${this.apiUrl}/${id}`, tool, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }

    deleteTool(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Something went wrong, please try again later.'));
    }
}
