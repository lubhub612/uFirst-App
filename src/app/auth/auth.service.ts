import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { EmailConfirmInfo } from './emailconfirm-info';
import * as auth0 from 'auth0-js';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Config } from './config';
import { AadharvInfo } from './aadharverify-info';
import { SignUpAuthInfo } from './signupauth-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '/'  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService1 {

  config = new Config;


  // Store authentication data
  expiresAt: number;
  userProfile: any;
  accessToken: string;
  authenticated: boolean;

  private loginUrl = 'http://128.199.69.67:5000/api/auth/login';
  private signupUrl = 'http://128.199.69.67:5000/api/auth/register';
  private aadharverifyUrl = 'http://128.199.69.67:5000/api/auth/aadharverfy';
  private emailconfirmUrl = 'http://128.199.69.67:5000/api/auth/verifyemailconfirm';
  private signupauthzeroUrl = 'http://128.199.69.67:5000/api/auth/userregister';
  private userauthzerohisUrl = 'http://128.199.69.67:5000/api/auth/userauthzerohistory';

    constructor(private http: HttpClient, private router: Router) {   }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  addData( data : AadharvInfo ): Observable<any> {
     return this.http.post<string>(this.aadharverifyUrl, data, httpOptions)
  }

  verifyConfirmEmail(info10: EmailConfirmInfo): Observable<string> {
    return this.http.post<string>(this.emailconfirmUrl, info10, httpOptions);
  }  

  signAuthZeroUp(info: SignUpAuthInfo): Observable<string> {
    return this.http.post<string>(this.signupauthzeroUrl, info, httpOptions);
  }

  showHisUser(useremail: string) {
    return this.http.get(this.userauthzerohisUrl + "/"+ useremail).pipe(map(res => res));
  }

 }
