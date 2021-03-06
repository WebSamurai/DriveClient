import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGruard implements CanActivate, CanActivateChild {
    constructor(private router: Router, private jwtHelperService: JwtHelperService) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = localStorage.getItem('token');
        if (token && !this.jwtHelperService.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(['/account/login']);
        return false;
    }
}
