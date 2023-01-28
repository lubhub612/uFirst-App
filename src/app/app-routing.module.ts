import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomenewComponent } from './homenew/homenew.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
import { VerifyemailpageComponent } from './verifyemailpage/verifyemailpage.component';
import { DocverificationComponent } from './docverification/docverification.component';
import { HomeauthComponent } from './homeauth/homeauth.component';

import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
{
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'signup',
    component: RegisterComponent
},
{
    path: 'auth/doctorlogin',
    component: DoctorloginComponent
},
{
    path: 'doctorsignup',
    component: DoctorregisterComponent
},
{
    path: 'thankyou',
    component: ConfirmpageComponent
},
{
    path: 'welcome',
    component: WelcomepageComponent
},
{
    path: 'verifyemail/:verifytoken',
    component: VerifyemailpageComponent
},
{
    path: 'docverify',
    component: DocverificationComponent
},
{
    path: 'homenew',
    component: HomenewComponent,
 },
{
    path: '',
    component: HomeauthComponent,
    pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
