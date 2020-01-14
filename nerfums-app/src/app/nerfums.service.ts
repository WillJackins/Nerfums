import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/Contract';
import {User} from '../model/User';
import {Modifier} from '../model/Modifier';

@Injectable({
  providedIn: 'root'
})
export class NerfumsService {
  urlRoot = 'http://localhost:8081/Nerfums/api';
  TEMP_SESSION_USERID = 1;

  constructor(private http: HttpClient) {

  }

  getAllActiveContracts(activeContracts: boolean): Observable<Array<Contract>> {
    let params = new HttpParams();
    params = params.append('requestingUserId', String(this.TEMP_SESSION_USERID));

    return this.http.get<Array<Contract>>(this.urlRoot + '/contracts', {params});
  }

  getAllContractsByOwnerId(ownerId: number, activeContracts: boolean): Observable<Array<Contract>> {
    let params = new HttpParams();
    params = params.append('activeContracts', String(activeContracts));

    return this.http.get<Array<Contract>>(this.urlRoot + '/users/' + this.TEMP_SESSION_USERID + '/contracts', {params});
  }

  postContract(contract: Contract): Observable<Contract> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Contract>(this.urlRoot + '/contracts', JSON.stringify(contract), httpOptions);
  }

  completeContract(completedContract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.urlRoot + '/contracts', completedContract);
  }

  deleteContractById(contractId: number): Observable<Contract> {
    return this.http.delete<Contract>(this.urlRoot + '/contracts/' + contractId);
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.urlRoot + '/users');
  }

  getAllModifiers(): Observable<Array<Modifier>> {
    return this.http.get<Array<Modifier>>(this.urlRoot + '/modifiers');
  }
}
