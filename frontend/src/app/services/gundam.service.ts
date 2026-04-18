import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Gundam} from '../common/gundam';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GundamService {
  private baseUrl = `${environment.apiBaseUrl}/gundam`;
  constructor(private httpClient: HttpClient) { }

  getGundamList(): Observable<Gundam[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.gundams)
    )
  }

  getGundamListByGrade(grade: string): Observable<Gundam[]> {
    const gradeURL = `${this.baseUrl}/search/findByGrade?grade=${grade}`;

    return this.httpClient.get<GetResponse>(gradeURL).pipe(
      map(response => response._embedded.gundams)
    )
  }

  searchGundams(theKeyword: string): Observable<Gundam[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.gundams)
    )
  }

  createGundam(gundam: any) {
    return this.httpClient.post('http://localhost:8080/api/gundam', gundam);
  }

  deleteGundam(id: number) {
    const idUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(idUrl);
  }

  updateGundam(gundam: any) {
    const idUrl = `${this.baseUrl}/${gundam.id}`;
    return this.httpClient.put(idUrl, gundam)
  }

  getGundam(id: number) {
    return this.httpClient.get<Gundam>(`${this.baseUrl}/${id}`);
  }
}





interface GetResponse {
  _embedded: {
    gundams: Gundam[];
  }
}
