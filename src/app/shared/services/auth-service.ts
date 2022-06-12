import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from "../interfaces/user.interface";

@Injectable()
export class AuthService{

    constructor(private http: HttpClient){

    }
    register(){}


    login(user: User){
        
    }
}