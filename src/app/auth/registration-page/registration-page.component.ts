import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth-service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit,OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null,[Validators.required, Validators.email] ),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnDestroy(): void {
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    this.form.disable()
    this.aSub=this.auth.register(this.form.value).subscribe(
      ()=>{
        this.router.navigate(['/login'], {
          queryParams:{
            registered:true
          }
        })
      },
      error =>{
        console.warn(error);
        this.form.enable();
      }
    )
  }
}
