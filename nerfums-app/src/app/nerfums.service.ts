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

  private currentSessionSubject: BehaviorSubject<Session>;
  private currentSession: Observable<Session>;

  constructor(private router: Router, private http: HttpClient) {
    this.currentSessionSubject = new BehaviorSubject<Session>(JSON.parse(localStorage.getItem('currentSession')));
    this.currentSession = this.currentSessionSubject.asObservable();
  }

  public observeCurrentSession(): Observable<Session> {
    return this.currentSession;
  }

  public get getCurrentSessionValue(): Session {
    return this.currentSessionSubject.value;
  }

  public get getCurrentTokenValue(): string {
    if (this.getCurrentSessionValue)
      return this.currentSessionSubject.value.token;

    return null;
  }

  public get getCurrentUserValue(): User {
    if (this.getCurrentSessionValue)
      return this.currentSessionSubject.value.userRO;

    return null;
  }

  private updateCurrentSession(updatedSession: Session) {
    localStorage.setItem('currentSession', JSON.stringify(updatedSession));
    this.currentSessionSubject.next(updatedSession);
  }

  private updateCurrentTokenValue(updatedToken: string) {
    this.currentSessionSubject.value.token = updatedToken;
    let updatedSession = this.currentSessionSubject.value;
    this.updateCurrentSession(updatedSession);
  }

  private updateCurrentUserValue(updatedUser: User) {
    this.currentSessionSubject.value.userRO = updatedUser;
    let updatedSession = this.currentSessionSubject.value;
    this.updateCurrentSession(updatedSession);
  }

  register(register: Register) {
    return this.http.post<Session>(this.urlRoot + '/authentication/register', register)
      .pipe(map(session => {
        if (session && session.token) {
          this.updateCurrentSession(session);
        }

        return session;
      }))
  }

  login(username: string, password: string) {
    return this.http.post<Session>(this.urlRoot + '/authentication/login', {username, password})
      .pipe(
        map(session => {
          if (session && session.token) {
            this.updateCurrentSession(session);
          }

          return session;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('currentSession');
    this.currentSessionSubject.next(null);
    this.router.navigate(['/about']).then();
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

    return this.http.post<Contract>(this.urlRoot + '/contracts', JSON.stringify(contract), httpOptions)
      .pipe(map(postedContract => {
        this.updateCurrentUserValue(postedContract.contractOwner);
        return postedContract;
      }));
  }

  completeContract(contract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.urlRoot + '/contracts', contract)
      .pipe(map(completedContract => {
        this.updateCurrentUserValue(completedContract.contractOwner);
        return completedContract;
      }));
  }

  deleteContractById(contractId: number): Observable<Contract> {
    return this.http.delete<Contract>(this.urlRoot + '/contracts/' + contractId)
      .pipe(map(deletedContract => {
        this.updateCurrentUserValue(deletedContract.contractOwner);
        return deletedContract;
      }));
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.urlRoot + '/users');
  }

  getAllModifiers(): Observable<Array<Modifier>> {
    return this.http.get<Array<Modifier>>(this.urlRoot + '/modifiers');
  }

  handleError(error: HttpErrorResponse) {
    console.log("Error: " + error.status);
    return throwError(error);
  }
}
