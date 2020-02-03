import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Contract} from '../model/Contract';
import {User} from '../model/User';
import {Modifier} from '../model/Modifier';
import {Session} from "../model/Session";
import {catchError, map} from "rxjs/operators";
import {Register} from "../model/Register";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NerfumsService {
  urlRoot = 'http://localhost:8081/Nerfums/api';
  TEMP_SESSION_USERID = 11;

  private currentSessionSubject: BehaviorSubject<Session>;
  public currentSession: Observable<Session>;

  constructor(private router: Router, private http: HttpClient) {
    this.currentSessionSubject = new BehaviorSubject<Session>(JSON.parse(localStorage.getItem('currentSession')));
    this.currentSession = this.currentSessionSubject.asObservable();
  }

  public get currentSessionValue(): Session {
    return this.currentSessionSubject.value;
  }

  public get currentUserValue(): User {
    return this.currentSessionSubject.value.userRO;
  }

  register(register: Register) {
    return this.http.post<Session>(this.urlRoot + '/authentication/register', register)
      .pipe(map(session => {
        if (session && session.token) {
          localStorage.setItem('currentSession', JSON.stringify(session));
          this.currentSessionSubject.next(session);
        }

        return session;
      }))
  }

  login(username: string, password: string) {
    return this.http.post<Session>(this.urlRoot + '/authentication/login', {username, password})
      .pipe(
        map(session => {
          if (session && session.token) {
            console.log(session);
            localStorage.setItem('currentSession', JSON.stringify(session));
            this.currentSessionSubject.next(session);
          }

          return session;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('currentSession');
    this.currentSessionSubject.next(null);
    this.router.navigate(['/about'])
  }

  getPostedContracts(): Observable<Array<Contract>> {
    return this.http.get<Array<Contract>>(this.urlRoot + '/contracts/posted');
  }

  getOwnerContracts(activeContracts: boolean): Observable<Array<Contract>> {
    let params = new HttpParams();
    params = params.append('active', String(activeContracts));

    return this.http.get<Array<Contract>>(this.urlRoot + '/contracts/owner', {params});
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

  postUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<User>(this.urlRoot + '/users', JSON.stringify(user), httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    console.log("DINGUM: " + error.status);
    return throwError(error);
  }
}
