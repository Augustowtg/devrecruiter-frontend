import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IVacancy } from '../models/vacancy/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private readonly API = `${environment.API_URL}`;
  token = String(localStorage.getItem('Authorization'))
  headers = new HttpHeaders({ Authorization: this.token });

  constructor(
    private HTTP: HttpClient
  ) { }

  private getVacancy(): Observable<IVacancy[]> {
    return this.HTTP.get<IVacancy[]>(`${this.API}/resume/register`)
    .pipe(take(1),tap((response: IVacancy[]) => response))
  }

  private registerVacancy(): Observable<IVacancy[]> {
    return this.HTTP.get<IVacancy[]>(`${this.API}/resume/register`)
    .pipe(take(1),tap((response: IVacancy[]) => response))
  }

  private editVacancy(): Observable<IVacancy[]> {
    return this.HTTP.get<IVacancy[]>(`${this.API}/resume/register`)
    .pipe(take(1),tap((response: IVacancy[]) => response))
  }
}
