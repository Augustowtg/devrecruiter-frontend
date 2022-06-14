import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResume } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private readonly API = `${environment.API_URL}`;
  token = String(localStorage.getItem('Authorization'))
  headers = new HttpHeaders({ Authorization: this.token });

  constructor(
    private HTTP: HttpClient
  ) { }

  public getResume(): Observable<IResume> {
    return this.HTTP.get<IResume>(`${this.API}/resume`)
      .pipe(take(1),tap((response: IResume) => response));
  }

  public editResume(): Observable<IResume> {
    return this.HTTP.get<IResume>(`${this.API}/resume/register`)
      .pipe(take(1),tap((response: IResume) => response));
  }

  public RegisterResume(resume: IResume): Observable<IResume> {
    return this.HTTP.post<IResume>(`${this.API}/resume/register`,resume)
    .pipe(take(1),tap((response: IResume) => response))
  }
}
