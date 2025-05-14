import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Candidato } from '../model/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
    private apiUrl = "https://gist.githubusercontent.com/samuelosoriooyuelaa/90a3f18dab3e44d6444cf48d1da481fe/raw/41be00b1d336bfbbb909a8ad76f9b5e2fb1c27e0/gistfile1.txt"
    
  
    constructor(private http: HttpClient) { }
    getCandidatos(): Observable<Candidato[]>{
      return this.http.get<any[]>(this.apiUrl).pipe(map(data=> data.map(item=>new Candidato(
        item.id,
        item.nombre,
        item.pais_origen,
        item.edad,
        item.vertiente_religiosa,
        item.foto
      ))));
    }
}