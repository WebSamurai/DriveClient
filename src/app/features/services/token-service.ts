import { Injectable } from '@angular/core';
import { AuthencateResultModel } from './service.proxy';

@Injectable({ providedIn: 'root' })
export class TokenService {
    public get(): string {
        return localStorage.getItem('token');
    }
    private setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    public setUser(data: AuthencateResultModel) {
        this.setToken(data.token);
        localStorage.setItem('user', JSON.stringify(data));
    }
    public GetUserName(): string {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString) as AuthencateResultModel;
            return user.userName;
        }
        return '';
    }
    public clear(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
