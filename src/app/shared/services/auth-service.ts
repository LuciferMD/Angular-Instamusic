import { Injectable } from "@angular/core";
//import { ConfigService } from "./config.service";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {tap} from "rxjs/operators"
import { User } from "../interfaces/user.interface";
import { RegUser } from "../interfaces/userReg.interface";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class AuthService{

    apiUrl:string;
    private token = null;

    constructor(private http: HttpClient){//, private config: ConfigService) {
        this.apiUrl ="http://localhost:3000/" //config.settings.api['cookbook-backend']; ///TO DOOOO
    }

    register(regUser: RegUser): Observable<RegUser>{
        const path = 'api/register'
        return this.http.post<RegUser>(`${this.apiUrl}${path}`,regUser)
    }

    //http://localhost:3000/api/login
    // login(user: User): Observable<{token:string}> {
    //     return this.http.post<{token:string}>('${this.apiUrl}/api/login',user)
    // }

    login(user: User): Observable<{token:string}> {
		const path = 'api/login';
		return this.http.post<{token:string}>(`${this.apiUrl}${path}`,user)
        .pipe(
            tap(
                ({token})=>{
                    localStorage.setItem('auth-token',token)
                    this.setToken(token)
                }
            )
        )
		
	}

    setToken(token:String){
        this.token= token;
    }

    getToken():string{
        return this.token;
    }

    isAuthenticated():boolean{
        return !!this.token
    }

    logout(){
        this.setToken(null)
        localStorage.clear
    }
}