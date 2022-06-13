import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { ConfigService } from "./config.service";



@Injectable()
export class ApiService {
	apiUrl!: string;
    
	constructor(private http: HttpClient, private config: ConfigService) {
		this.apiUrl = config.settings.api['cookbook-backend'];
	}

	get(path: string) {
		return this.http.get(`${this.apiUrl}${path}`)
		.pipe(
			catchError(this.handleError)
		)
	}

	post(path: string, body: Object = {}) {
		return this.http.post(`${this.apiUrl}${path}`, body)
		.pipe(
			catchError(this.handleError)
		)
	}

	put(path: string, body: Object = {}) {
		return this.http.put(`${this.apiUrl}${path}`, body)
		.pipe(
			catchError(this.handleError)
		)
	}

	patch(path: string, body: Object = {}) {
		return this.http.patch(`${this.apiUrl}${path}`, body)
		.pipe(
			catchError(this.handleError)
		)
	}

	uploadFile(path: string, formData: FormData) {
		const headers = new HttpHeaders();
		headers.set('Content-Type', 'multipart/form-data');
		return this.http.post(`${this.apiUrl}${path}`, formData, {headers}).pipe(
			catchError(this.handleError)
		)
	}

	//add 500 error handler
	private handleError(error: HttpErrorResponse) {
		// if (error.status === 0) {
		// 	console.error('An error occurred:', error.error);
		// } else {
		// 	console.error(
		// 	  `Backend returned code ${error.status}, body was: `, error.error);
		// }
		return throwError(() => error.error);
	}
}