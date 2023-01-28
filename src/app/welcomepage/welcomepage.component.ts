import { Component,  OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService1 } from '../auth/auth.service';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

constructor(private authService: AuthService1, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goHome() :void {
    this.router.navigateByUrl('/auth/login');
  }

}
