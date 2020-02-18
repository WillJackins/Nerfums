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
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class NerfumsService {
  urlRoot = 'http://localhost:8081/Nerfums/api';

  private currentSessionSubject: BehaviorSubject<Session>;
  private currentSession: Observable<Session>;

  constructor(private router: Router, private http: HttpClient, private dialog: MatDialog) {
    this.currentSessionSubject = new BehaviorSubject<Session>(JSON.parse(localStorage.getItem('currentSession')));
    this.currentSession = this.currentSessionSubject.asObservable();

    if (this.getCurrentSessionValue) {
      this.refreshLogin();
      this.refreshLoginTimer();
    }
  }

  //=====================================================================================
  // Session Managers
  //=====================================================================================

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
    console.log(updatedSession.userRO.userAvatar)
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

  //=====================================================================================
  // Authentication Managers
  //=====================================================================================

  register(register: Register) {
    return this.http.post<Session>(this.urlRoot + '/authentication/register', register)
      .pipe(
        map(session => this.refreshCurrentSession(session)),
        catchError(this.handleError)
      );
  }

  login(username: string, password: string) {
    return this.http.post<Session>(this.urlRoot + '/authentication/login', {username, password})
      .pipe(
        map(session => this.refreshCurrentSession(session)),
        catchError(this.handleError)
      );
  }

  refreshLogin() {
    return this.http.get<Session>(this.urlRoot + '/authentication/refresh')
      .pipe(
        map(session => this.refreshCurrentSession(session)),
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem('currentSession');
    this.currentSessionSubject.next(null);
    this.router.navigate(['/about']).then();
  }

  //=====================================================================================
  // API Calls
  //=====================================================================================

  getPostedContracts(): Observable<Array<Contract>> {
    return this.http.get<Array<Contract>>(this.urlRoot + '/contracts/posted')
      .pipe(catchError(error => this.handleError(error)));
  }

  getOwnerContracts(activeContracts: boolean): Observable<Array<Contract>> {
    let params = new HttpParams();
    params = params.append('active', String(activeContracts));

    return this.http.get<Array<Contract>>(this.urlRoot + '/contracts/owner', {params})
      .pipe(catchError(error => this.handleError(error)));
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
        }),
        catchError(error => this.handleError(error))
      );
  }

  completeContract(contract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.urlRoot + '/contracts', contract)
      .pipe(map(completedContract => {
          this.updateCurrentUserValue(completedContract.contractOwner);
          return completedContract;
        }),
        catchError(error => this.handleError(error))
      );
  }

  deleteContractById(contractId: number): Observable<Contract> {
    return this.http.delete<Contract>(this.urlRoot + '/contracts/' + contractId)
      .pipe(map(deletedContract => {
          this.updateCurrentUserValue(deletedContract.contractOwner);
          return deletedContract;
        }),
        catchError(error => this.handleError(error))
      );
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.urlRoot + '/users')
      .pipe(catchError(error => this.handleError(error)));
  }

  getAllModifiers(): Observable<Array<Modifier>> {
    return this.http.get<Array<Modifier>>(this.urlRoot + '/modifiers')
      .pipe(catchError(error => this.handleError(error)));
  }

  //=====================================================================================
  // Helpers
  //=====================================================================================

  private refreshCurrentSession(session: Session) {
    if (session && session.token) {
      this.updateCurrentSession(session);

      this.refreshLoginTimer();
    }

    return session;
  }

  private async refreshLoginTimer() {
    await this.sleep(1000 * 60 * 15);

    this.dialog.open(ConfirmDialogComponent, {data: {question: "Stay Logged In?"}}).afterClosed()
      .subscribe(result => {
        if (result) {
          this.refreshLogin().subscribe();
        } else {
          this.logout();
        }
      });
  }

  private sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  patchUserPassword() {

  }

  getUserAvatar(): Observable<string> {
    return this.http.get(this.urlRoot + '/avatars', {responseType: 'text'}).pipe(catchError(error => this.handleError(error)));
  }

  patchUserAvatar(formData: FormData): Observable<string> {
    return this.http.post<string>(this.urlRoot + '/avatars', formData).pipe(catchError(error => this.handleError(error)));
  }

  patchUsername() {

  }

  settingsPage() {
    this.router.navigate(['/settingsPage'])
  }

  handleError(error: HttpErrorResponse) {
    if (this.getCurrentSessionValue && error.status == 403) {
      this.logout();
    }
    console.log(error.status);
    return throwError(error);
  }
}


