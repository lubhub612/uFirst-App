import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';



@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.component.html',
  styleUrls: ['./homenew.component.css']
})
export class HomenewComponent implements OnInit {

  info: any;

  constructor(private token: TokenStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const USERFIRSTNAME_KEY = 'AuthUserfirstname';
const USERLASTNAME_KEY = 'AuthUserlastname';
const USEREMAIL_KEY = 'AuthUseremail';

    this.info = {
      token: localStorage.getItem(TOKEN_KEY),
      username: localStorage.getItem(USERNAME_KEY),
      firstname: localStorage.getItem(USERFIRSTNAME_KEY),
      lastname: localStorage.getItem(USERLASTNAME_KEY),
      useremail: localStorage.getItem(USEREMAIL_KEY),
       };
    console.log(this.info);
    
  }


  verify(): void {
    this.router.navigateByUrl('/docverify');
  }

  lhedi(): void {
    this.router.navigateByUrl('/auth/login');
  }
  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/auth/login');
    ///////window.location.reload();
  }

}
