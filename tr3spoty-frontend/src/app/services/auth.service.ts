import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  initialize() {
    return this.getTokenRequest()
  }
  
  getTokenRequest(){
    /* const body = 'grant_type=client_credentials';
    const headers = new HttpHeaders()
    .set('Authorization', 'Basic ' + btoa(environment.spotifyClientId + ':' + environment.spotifyClientSecret))
    .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(environment.tokenEndpoint, body, {headers}); */
    return this.http.get('');
  }

  setToken(token: string) {
    console.log('settoken', token)
    localStorage.setItem('spotifyToken', token);
  }

  getToken() : string {
    return localStorage.getItem('spotifytoken') || "";
  }

}
