import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.less']
})
export class VerticalNavbarComponent implements OnInit {
  public toggle = false;
  constructor() { }

  ngOnInit(): void {
  }
  public togleNavBar() {
    this.toggle = !this.toggle;
  }
}
