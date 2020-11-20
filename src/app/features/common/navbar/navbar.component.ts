import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }
  public userName: string;
  ngOnInit(): void {
    this.userName = this.tokenService.GetUserName();
  }
  public logOut() {
    this.tokenService.clear();
    window.location.reload();

  }
}
