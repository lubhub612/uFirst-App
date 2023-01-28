import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from '../auth/auth.service';
import { CountriesService } from '../auth/countries.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit  {

form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  age: any;
  passwordIsValid = false;
  address2 : any;
  address1 : any;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  maxDate;
  today = new Date();
  hide = true;
  hide1 = true;

  constructor(private authService: AuthService1, private router: Router, private country:CountriesService) {
    this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 22));
   }

  ngOnInit() { 
    this.getCountries();
  }

  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue : any) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue : any) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    console.log(this.cityInfo);
  }
    

  signinhed(): void {
    this.router.navigateByUrl('/auth/login');
  }

  signinhed1(): void {
    this.router.navigateByUrl('/auth/doctorlogin');
  }

  signuphedo(): void {
    this.router.navigateByUrl('/signup');
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


  passwordValid(event : any) {
    this.passwordIsValid = event;
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
      "Doctor",
      "No",
      this.form.userphoneno,
      this.form.userpincode,
      this.form.usermedino,
      this.form.aadharno, 
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
