import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.less']
})
export class VerticalNavbarComponent implements OnInit {
  public toggle = false;
  public user: any;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.user = this.tokenService.GetUser();
  }
  public togleNavBar() {
    this.toggle = !this.toggle;
  }
}
