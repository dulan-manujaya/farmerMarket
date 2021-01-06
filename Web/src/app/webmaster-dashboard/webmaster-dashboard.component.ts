import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webmaster-dashboard',
  templateUrl: './webmaster-dashboard.component.html',
  styleUrls: ['./webmaster-dashboard.component.css'],
})
export class WebmasterDashboardComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      conpassword: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  loginForm: FormGroup;
  isSubmitted = false;

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    //sessionStorage.setItem("farmer",JSON.stringify(this.loginForm.value) );
    // this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/admin');
  }
}