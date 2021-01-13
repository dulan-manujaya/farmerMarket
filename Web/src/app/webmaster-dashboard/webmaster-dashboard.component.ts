import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-webmaster-dashboard',
  templateUrl: './webmaster-dashboard.component.html',
  styleUrls: ['./webmaster-dashboard.component.css'],
})
export class WebmasterDashboardComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: SharedService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
      conpassword: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  loginForm: FormGroup;
  isSubmitted = false;
  isValid = true;

  get formControls() {
    return this.loginForm.controls;
  }
  formValidation() {
    if (this.loginForm.value.username === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a username',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.pwd === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a password',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.conpassword != this.loginForm.value.pwd) {
      Swal.fire({
        icon: 'error',
        text: "Passwords don't match",
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.email === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a email',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.type === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please select a type',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
  login() {
    this.formValidation();

    if (this.isValid == true) {
      console.log(this.loginForm.value);
      this.isSubmitted = true;
      if (this.loginForm.invalid) {
        return;
      }

      console.log(this.loginForm.value.type);

      this.service.userCreation(this.loginForm.value).subscribe((data) => {
        console.log(JSON.stringify(data));
        alert('User Created!');
      });
    }
  }
}
