import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../share/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(public authService: AuthenticationService,
              public router: Router,
              public builder:FormBuilder) {

    this.signUpForm = this.builder.group({
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.minLength(6)]]
      });
  }

  get email(){
    return this.signUpForm.controls['email'];
  }

  get password(){
    return this.signUpForm.controls['password']
  }

  signUp(){
    //Aqui ya te logeaste
    this.authService.signUp(this.signUpForm.value).subscribe((response:any) => {
      localStorage.setItem('accessToken', JSON.stringify(response.accessToken ));
      this.signUpForm.reset();
      //Te redirige
      this.router.navigate(['home']).then();
      console.log(`accessToken: ${localStorage.getItem('accessToken')}`);
    });
  }
  cancelSignUp(){
    console.log('Cancelled');
  }
}
