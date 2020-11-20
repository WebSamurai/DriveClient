import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { update } from 'lodash';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token-service';
@Injectable()
export class AppHttpInterseptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addAuthHeader(req));
    }
    private addAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
        const modified = req.headers.set('Authorization', `bearer ${this.tokenService.get()}`);
        return req.clone({ headers: modified });
    }
}
