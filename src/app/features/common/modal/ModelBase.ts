import { EventEmitter, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { SelectSeviceProxy } from '../../services/service.proxy';

export abstract class ModelBase<T> implements OnInit {
    public entityForm: FormGroup;
    public bsModalRef: BsModalRef;
    public messageService: ToastrService;
    public selectService: SelectSeviceProxy;
    public onUpdate = new EventEmitter<T>();
    public entity: T;
    public mode = 'Add';
    public formBuider: FormBuilder;
    constructor(public injector: Injector) {
        this.bsModalRef = injector.get(BsModalRef);
        this.formBuider = injector.get(FormBuilder);
        this.messageService = injector.get(ToastrService);
        this.selectService = injector.get(SelectSeviceProxy);
    }
    ngOnInit(): void {
        this.buildForm();
        this.fillDropdowns();
    }

    close() {
        if (this.entityForm?.dirty) {
            if (confirm('Form has Unsaved values do you want to discard the chagnes ?')) {
                this.bsModalRef.hide();

            } else {
                return;
            }
        }
        this.bsModalRef.hide();
    }
    public abstract buildForm();
    public fillDropdowns() {

    }
    public abstract save();
    public updateView() {
        this.buildForm();
    }
}
