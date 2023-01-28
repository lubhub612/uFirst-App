import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-homeauth',
  templateUrl: './homeauth.component.html',
  styleUrls: ['./homeauth.component.css']
})
export class HomeauthComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

  logout() {
     this.auth.logout({ returnTo: this.document.location.origin });

  }

}
