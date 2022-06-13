import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

   constructor(private auth:AuthService) {
    }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(5)])
    });
  }

  onSubmit(){
    this.auth.login(this.form.value.login,this.form.value.password).subscribe(
      ()=>console.log('Login succes'),
      error => {console.warn(error);
      }
    )
  }

}
