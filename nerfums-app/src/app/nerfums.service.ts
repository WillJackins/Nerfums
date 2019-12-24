import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/Contract';
import {User} from '../model/User';
import {Modifier} from '../model/Modifier';

@Injectable({
  providedIn: 'root'
})
export class NerfumsService {
  urlRoot = 'http://localhost:8081/Nerfums/api';

  constructor(private http: HttpClient) {

  }

  getAllContracts(): Observable<Array<Contract>> {
    return this.http.get<Array<Contract>>(this.urlRoot + '/contracts');
  }

  getAllContractsByOwnerId(ownerId: number): Observable<Array<Contract>> {
    return this.http.get<Array<Contract>>(this.urlRoot + '/users/' + ownerId + '/contracts');
  }

  postContract(contract: Contract): Observable<Contract> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};

    return this.http.post<Contract>(this.urlRoot + '/contracts', JSON.stringify(contract), httpOptions);
  }

  completeContract(completedContract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.urlRoot + '/contracts/' + completedContract.contractId, completedContract);
  }

  deleteContractById(contractId: number): Observable<Contract> {
    console.log('DELETE');
    return this.http.delete<Contract>(this.urlRoot + '/contracts/' + contractId);
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.urlRoot + '/users');
  }

  getAllModifiers(): Observable<Array<Modifier>> {
    return this.http.get<Array<Modifier>>(this.urlRoot + '/modifiers');
  }
}
