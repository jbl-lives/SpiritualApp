import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Gift } from '../dash-models/gift.model';
import { GiftResponse } from '../dash-models/gift.model';

@Injectable({
    providedIn: 'root'
})
export class GiftService {
    private apiUrl = 'http://localhost:5003/api/gift'; // Correct API URL

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

    getGift(id: number): Observable<Gift> {
        return this.http.get<Gift>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }
    
    // getGifts(pageNumber: number = 1, pageSize: number = 6): Observable<any> {
    //     return this.http.get<any>(`/api/gift?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    // }

    getGifts(page: number = 1, pageSize: number = 10): Observable<GiftResponse> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());
    
        console.log("Fetching gifts from:", `${this.apiUrl}?${params.toString()}`); // Debugging
    
        return this.http.get<GiftResponse>(this.apiUrl, { headers: this.getAuthHeaders(), params });
    }
    
    

    createGift(formData: FormData): Observable<any> {
        return this.http.post<Gift>(this.apiUrl, formData, { headers: this.getAuthHeaders() });
    }

    updateGift(id: number, gift: any): Observable<any> { // Use 'any' or a more specific type
        return this.http.put(`${this.apiUrl}/${id}`, gift, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }


    deleteGift(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() }).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Something went wrong, please try again later.'));
    }

}
