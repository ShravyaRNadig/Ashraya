import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  message: string;
  returnUrl: string;
  model: User = {
                  emailid: "admin@gmail.com",
                  password: "admin1234"
                }

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      emailid: ['', Validators.required],      
      password: ['', Validators.required]      
      });
      this.returnUrl = '/adminhome';
      //this.authService.logout();
  }

  get formControls() { return this.loginForm.controls; }

  login(){

    if (this.loginForm.invalid) {
      return;
    }
    else {
      if (
        this.formControls.emailid.value == this.model.emailid &&
        this.formControls.password.value == this.model.password) {
          console.log("login successful");
          //this.authService.authLogin(this.model);
          localStorage.setItem('isLoggedIn',"true");
          localStorage.setItem('token', this.formControls.emailid.value);
          this.router.navigate([this.returnUrl]);
        }
      else {
        this.message = "Please check your emailid and password";
      }
    }
    
    }
  }
