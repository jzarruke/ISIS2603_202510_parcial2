import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/';

  getListCandidatos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'candidates.json');
  }

  getDetailCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(this.apiUrl + ':id/candidates.json');
  }
}