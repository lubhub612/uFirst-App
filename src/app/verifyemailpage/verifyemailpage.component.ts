import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService1 } from '../auth/auth.service';
import { EmailConfirmInfo } from '../auth/emailconfirm-info';

@Component({
  selector: 'app-verifyemailpage',
  templateUrl: './verifyemailpage.component.html',
  styleUrls: ['./verifyemailpage.component.css']
})
export class VerifyemailpageComponent implements OnInit {

verifytoken: any;
    //form: any = {};
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';
    emailconfirmInfo: EmailConfirmInfo;

    constructor(private authService: AuthService1, private router: Router, private route: ActivatedRoute) { }

    

  ngOnInit(): void {
    this.verifytoken = this.route.snapshot.params.verifytoken;
  console.log(this.verifytoken);
  }

  goHome() :void {
    this.emailconfirmInfo = new EmailConfirmInfo(
      this.verifytoken
 );
this.authService.verifyConfirmEmail(this.emailconfirmInfo)
   .subscribe( data => {
     console.log(data);
     this.isSignedUp = true;
     this.isSignUpFailed = false;
    
     
    this.router.navigateByUrl('/welcome');
    
   },
   error => {
     console.log(error);
     this.errorMessage = error.error.message;
     this.isSignUpFailed = true;
   }
   
   );
  }

}
