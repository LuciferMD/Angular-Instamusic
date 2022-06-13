import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";


@Injectable({
    providedIn: 'root'
})
export class AuthService{

    apiUrl:string;

    constructor(private api: ApiService) {
        
    }

    register(){}

    //http://localhost:3000/api/login
    // login(user: User): Observable<{token:string}> {
    //     return this.http.post<{token:string}>('${this.apiUrl}/api/login',user)
    // }

    login(login: string, password: string) {
		const url = 'api/login';
		return this.api.post(url, {login, password})
		
	}
}