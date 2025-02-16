import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from '../categories/dash-tools/dash-tools.component'; // Import your Tool interface

export interface ToolResponse {
    totalCount: number;
    tools: Tool[];
}

@Injectable({
    providedIn: 'root'
})
export class ToolService {
    private apiUrl = 'http://localhost:5003/api/tools'; // Base API URL

    constructor(private http: HttpClient) { }

    private getAuthHeaders(): HttpHeaders {
        const token = localStorage.getItem('authToken');
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    get ApiUrl(): string {
        return this.apiUrl;
    }

    getTools(): Observable<ToolResponse> {
        return this.http.get<ToolResponse>(this.apiUrl, { headers: this.getAuthHeaders() });
    }

    getTool(id: number): Observable<Tool> {
        return this.http.get<Tool>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
    }

    createTool(toolData: any): Observable<Tool> { // Accept any type for toolData
        return this.http.post<Tool>(this.apiUrl, toolData, { headers: this.getAuthHeaders() });
    }

    updateTool(id: number, toolData: any): Observable<any> { // Accept any type for toolData
        const url = `${this.apiUrl}/${id}`;
        return this.http.put(url, toolData, { headers: this.getAuthHeaders() });
    }

    deleteTool(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
    }

    uploadImage(imageFile: File, toolId: number): Observable<any> {
        const formData = new FormData();
        formData.append('image', imageFile, imageFile.name);

        return this.http.post(`${this.apiUrl}/${toolId}/upload-image`, formData, { headers: this.getAuthHeaders() });
    }
}