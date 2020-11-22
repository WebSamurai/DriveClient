import { Injectable } from '@angular/core';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
@Injectable({ providedIn: 'root' })
export class ModelHelper {

    constructor(private modalService: BsModalService) { }
    public openModel<T>(component: any, entity: T): BsModalRef {
        const modelOption = new ModalOptions();
        modelOption.backdrop = 'static';
        modelOption.keyboard = false;
        modelOption.class = 'modal-lg';
        const ref = this.modalService.show(component, modelOption) as BsModalRef<any>;
        if (entity !== null) {
            ref.content.entity = entity;
            ref.content.mode = 'Edit';
            ref.content.updateView();
        }
        return ref;

    }
}
