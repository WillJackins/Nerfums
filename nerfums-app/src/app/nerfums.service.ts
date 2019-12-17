import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NerfumsService {

  constructor(private http: HttpClient) {

  }

  getAllContracts(): Observable<any> {
    return this.http.get('http://localhost:8081/Nerfums/api/contracts');
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8081/Nerfums/api/users');
  }

  getAllModifiers(): Observable<any> {
    return this.http.get('http://localhost:8081/Nerfums/api/modifiers');
  }

  postContract(contract: any): void {
    this.http.post('http://localhost:8081/Nerfums/api/contracts', contract);
  }
}
