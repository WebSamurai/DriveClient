import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.less']
})
export class LoginHomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
