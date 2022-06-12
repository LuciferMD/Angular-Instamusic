import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      login: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){

  }

}
