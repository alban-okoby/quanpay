import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  API_URL = environment.API_URL + '/auth';
  isLoggedIn = false;


  signIn(userData: any) {
    return this.http.post(`${this.API_URL}/signin`, userData, {headers: environment.headers} )
    .pipe(
      catchError((error: any) => {
        console.error('Login failed:', error);
        throw error;
      })
    );;
  }
  signUp(userData: any) {
    return this.http.post(`${this.API_URL}/register`, userData, {headers: environment.headers} );
  }

  currentUser() {
    const cu = this.http.get(`${this.API_URL}/current-user`, {headers: environment.headers});
    return cu;
  }

  verifyToken(token: any): Observable<any> {
    return this.http.post(`${this.API_URL}/token/verify`, token, {headers: environment.headers}
    );
  }

  resendToken(token: any): Observable<any> {
    return this.http.post(`${this.API_URL}/token/resend`, token, {headers: environment.headers}
    );
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.isLoggedIn = false;
  }
}
