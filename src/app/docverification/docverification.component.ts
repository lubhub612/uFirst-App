import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from '../auth/auth.service';
import { AadharvInfo } from '../auth/aadharverify-info';
import { TokenStorageService } from '../auth/token-storage.service';



@Component({
  selector: 'app-docverification',
  templateUrl: './docverification.component.html',
  styleUrls: ['./docverification.component.css']
})
export class DocverificationComponent implements OnInit {


form: any = {};
  aadharvInfo: AadharvInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  info: any;

  constructor(private token: TokenStorageService, private authService: AuthService1, private router: Router) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      firstname: this.token.getFirstname(),
      lastname: this.token.getLastname(),
      useremail: this.token.getUseremail(),
      /*usercity: this.token.getUsercity(),
      userstates: this.token.getUserstates(),
      usercountry: this.token.getUsercountry(),
      usersmoker: this.token.getUsersmoker(),
      useralcholic: this.token.getUseralcholic(),
      userdob: this.token.getUserdob(),
      userage: this.token.getUserage(),
      userrole: this.token.getUserrole(),
      userpincode: this.token.Userpincode(),
      userbloodgroup: this.token.Userbloodgroup(),
      userphoneno: this.token.Userphoneno(),
      usergender: this.token.Usergender(),
      useraddress : this.token.Useraddress(),
      userheight : this.token.Userheight(),
      userheightunit : this.token.Userheightunit(),
      userweight : this.token.Userweight(),
      userweightunit : this.token.Userweightunit(),
      userfamilydoctor : this.token.Userfamilydoctor(),
      userfamilymember : this.token.Userfamilymember(),
      useremephoneno : this.token.Useremergencyphoneno(),
      userprofilepicname : this.token.Userprofilepic(), */
    };
    console.log(this.info);
    
  }


  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/auth/login');
    ///////window.location.reload();
  }


  hedi(): void {
    this.router.navigateByUrl('/homenew');
  }



  onSubmit() {
    console.log(this.form);

    this.aadharvInfo = new AadharvInfo(
       
      this.form.aadharno
      );

    this.authService.addData(this.aadharvInfo).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/homenew');
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );

  }

}
