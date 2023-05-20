import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQueueSongs() : Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer BQDtjr5oG6CiJfpkueVeNkjgQgBgUE-gZdnUe4AQK3MEFH-OdCy5qDPktl6ZH87-N6Z8lgx54wM0r1wiW1vsJNv56DLrMW5ZgHSJLmPlvq2Kg_rBEk_j`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(`${environment.spotifyApiUrl}/me/player/queue`, {headers});
  }
}
