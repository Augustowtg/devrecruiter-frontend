import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private readonly API = `${environment.API_URL}`;
  token = String(localStorage.getItem('Authorization'))
  headers = new HttpHeaders({ Authorization: this.token });

  constructor(
    private HTTP: HttpClient
  ) { }
  
  public getApplicant(): Observable<any[]> {
    return this.HTTP.get<any[]>(`${this.API}/resume/list`)
    .pipe(take(1),tap((response: any[]) => response))
  }
}
