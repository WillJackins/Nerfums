import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Contract} from '../model/Contract';
import {User} from '../model/User';
import {Modifier} from '../model/Modifier';

@Injectable({
  providedIn: 'root'
})
export class NerfumsService {

  constructor(private http: HttpClient) {

  }

  getAllContracts(): Observable<Array<Contract>> {
    return this.http.get<Array<Contract>>('http://localhost:8081/Nerfums/api/contracts');
  }

  getUsersContracts(userId: number): Observable<Array<Contract>> {
    return this.http.get<Array<Contract>>('http://localhost:8081/Nerfums/api/users/' + userId + '/contracts');
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:8081/Nerfums/api/users');
  }

  getAllModifiers(): Observable<Array<Modifier>> {
    return this.http.get<Array<Modifier>>('http://localhost:8081/Nerfums/api/modifiers');
  }

  postContract(contract: Contract): Observable<Contract> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};

    return this.http.post<Contract>('http://localhost:8081/Nerfums/api/contracts', JSON.stringify(contract), httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
