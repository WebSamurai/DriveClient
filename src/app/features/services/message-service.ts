import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppMessageService {
    user: Subject<any> = new Subject<any>();

    setUserUpdate(data: any) {
        this.user.next(data);
    }
    OnUserUpdate() {
        return this.user.asObservable();
    }
}
