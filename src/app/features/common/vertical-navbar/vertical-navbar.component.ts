import { Component, OnDestroy, OnInit } from '@angular/core';
import { isNil } from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { AppMessageService } from '../../services/message-service';
import { UserDto, UserSeviceProxy } from '../../services/service.proxy';
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.less']
})
export class VerticalNavbarComponent implements OnInit, OnDestroy {
  public toggle = false;
  public user: UserDto;
  private onUserUpdate: Subscription;
  constructor(private tokenService: TokenService, private userService: UserSeviceProxy, private appMessageService: AppMessageService) {

  }
  private registerSubcription() {
    this.onUserUpdate = this.appMessageService.OnUserUpdate().subscribe(x => {
      this.user = x;
    });
  }

  ngOnDestroy(): void {
    this.onUserUpdate.unsubscribe();
  }

  ngOnInit(): void {
    this.registerSubcription();
    this.getUser();
  }
  private getUser() {
    const userId = this.tokenService.GetUser().id;
    this.userService.get(userId).subscribe(x => this.user = x);
  }
  isPhoto() {
    return isNil(this.user?.photo) || this.user?.photo === '';
  }
  public togleNavBar() {
    this.toggle = !this.toggle;
  }
}
