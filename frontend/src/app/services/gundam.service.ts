import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Gundam} from '../common/gundam';

@Injectable({
  providedIn: 'root'
})
export class GundamService {
  private baseUrl = "http://localhost:8080/api/gundam"
  constructor(private httpClient: HttpClient) { }

  getGundamList(): Observable<Gundam[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.gundams)
    )
  }
}

interface GetResponse {
  _embedded: {
    gundams: Gundam[];
  }
}
