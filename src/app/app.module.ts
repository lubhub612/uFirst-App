import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomenewComponent } from './homenew/homenew.component';
import { LoginComponent } from './login/login.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { RegisterComponent } from './register/register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {  MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import 'flatpickr/dist/flatpickr.css';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';
import { VerifyemailpageComponent } from './verifyemailpage/verifyemailpage.component';
import { DocverificationComponent } from './docverification/docverification.component';
import { HomeauthComponent } from './homeauth/homeauth.component';



@NgModule({
  declarations: [
    AppComponent,
    HomenewComponent,
    LoginComponent,
    DoctorloginComponent,
    DoctorregisterComponent,
    RegisterComponent,
    ThankyouComponent,
    WelcomepageComponent,
    ConfirmpageComponent,
    VerifyemailpageComponent,
    DocverificationComponent,
    HomeauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    MatIconModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AuthModule.forRoot({
       domain: 'dev-otycnt0yjzgqvhdo.us.auth0.com',
      clientId: 'a85NGeq8urW19Z8HkYuPTdT8RknzRan3',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
