import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  passwordIsValid = false;
  address1 : any;
  address2 : any;
  maxDate;
  today = new Date();
  hide = true;
  hide1 = true;
  constructor(private authService: AuthService1, private router: Router) {
    this.maxDate = this.today;
   }

  ngOnInit() { }

  signinhed(): void {
    this.router.navigateByUrl('/auth/login');
  }

  signinhed1(): void {
    this.router.navigateByUrl('/auth/doctorlogin');
  }

  signuphedo(): void {
    this.router.navigateByUrl('/doctorsignup');
  }

  transform(value:string): void {
    let first = value.substr(0,1).toUpperCase();
    this.form.firstname =  first + value.substr(1); 
  }


  transform1(value:string): void {
    let first = value.substr(0,1).toUpperCase();
    this.form.lastname =  first + value.substr(1); 
  }

  CalculateAge(value:string): void {
    //this.birthdate = "10/10/1981";
    if (value) {
      var timeDiff = Math.abs(Date.now() - new Date(value).getTime());
      this.form.userage = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(this.form.userage);
        }
    
  }


  onSubmit() {
    console.log(this.form);

    if(!this.form.useraddress2 || this.form.useraddress2 == null || this.form.useraddress2 === '') {
      this.address2 = 0;
    } else {
      this.address2 = this.form.useraddress2
    }

    if(!this.form.useraddress1 || this.form.useraddress1 == null || this.form.useraddress1 === '') {
      this.address1 = 0;
    } else {
      this.address1 = this.form.useraddress1
    }


    this.signupInfo = new SignUpInfo(
      this.form.firstname,
      this.form.lastname,
      this.form.username,
      this.form.useremail,
      this.form.password,
      this.form.cpharse,
      this.form.usercity,
      this.form.userstates,
      this.form.usercountry,
      this.address1,
      this.address2,
      "not Interested",
      "not Interested",
      this.form.userdob,
      this.form.userage,
      this.form.usergender,
      "Patient",
      "No",
      this.form.userphoneno,
      this.form.userpincode,
      "0",
      this.form.useradhrno, 
      this.form.userlangu
      );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/thankyou');
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
