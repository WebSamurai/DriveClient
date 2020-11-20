import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthencateResultModel } from './service.proxy';

@Injectable({ providedIn: 'root' })
export class TokenService {
    constructor(private jwtHelperService: JwtHelperService) {

    }
    public get(): string {
        return localStorage.getItem('token');
    }
    private setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    public setUser(data: AuthencateResultModel) {
        this.setToken(data.token);
        this.setSchoolId(data.token);
        localStorage.setItem('user', JSON.stringify(data));
    }
    setSchoolId(token: string) {
        const data = this.jwtHelperService.decodeToken(token);
        localStorage.setItem('schoolId', data.schoolId);
    }
    getSchoolId(): number {
        return +localStorage.getItem('schoolId');
    }
    public GetUserName(): string {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString) as AuthencateResultModel;
            return user.userName;
        }
        return '';
    }
    public GetUser(): AuthencateResultModel {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString) as AuthencateResultModel;
            return user;
        }
        return null;
    }
    public clear(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('schoolId');
    }
}
