import { Component, OnInit } from '@angular/core';
import { isNil } from 'lodash';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { UserDto, UserSeviceProxy } from 'src/app/features/services/service.proxy';
import { TokenService } from 'src/app/features/services/token-service';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  public user: UserDto;
  bsModalRef: BsModalRef;

  constructor(
    private tokenService: TokenService,
    private userService: UserSeviceProxy,
    private modalService: BsModalService) {

  }


  ngOnInit(): void {
    const userId = this.tokenService.GetUser();
    this.userService.get(userId.id).subscribe(x => this.user = x);
  }
  public editProfile() {
    const modelOption = new ModalOptions();
    modelOption.backdrop = 'static';
    modelOption.keyboard = false;
    modelOption.class = 'modal-lg';
    this.bsModalRef = this.modalService.show(EditUserProfileComponent, modelOption);
    this.bsModalRef.content.user = this.user;
    this.bsModalRef.content.updateView();
    this.bsModalRef.content.onUpdate.subscribe(x => this.user = x);

  }
  isPhoto() {
    return isNil(this.user?.photo) || this.user?.photo === '';
  }
}
