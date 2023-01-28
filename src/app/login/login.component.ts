import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  hide = true;
  constructor(private authService: AuthService1, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
     
    } 
  }


onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveFirstname(data.firstname);
        this.tokenStorage.saveLastname(data.lastname);
        this.tokenStorage.saveUseremail(data.useremail);
        this.tokenStorage.saveUsercity(data.usercity);
        this.tokenStorage.saveUserstates(data.userstates);
        this.tokenStorage.saveUsercountry(data.usercountry);
        this.tokenStorage.saveUsersmoker(data.usersmoker);
        this.tokenStorage.saveUseralcholic(data.useralcholic);
        this.tokenStorage.saveUserdob(data.userdob);
        this.tokenStorage.saveUserage(data.userage);
        this.tokenStorage.saveUserrole(data.userrole);
        this.tokenStorage.saveUserpincode(data.userpincode);
        this.tokenStorage.saveUserbloodgroup(data.userbloodgroup);
        this.tokenStorage.saveUserphoneno(data.userphoneno);
        this.tokenStorage.saveUsergender(data.usergender);
        this.tokenStorage.saveUseraddress(data.useraddress1);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigateByUrl('/homenew');
        },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

 
}
