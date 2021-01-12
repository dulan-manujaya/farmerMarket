import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.css'],
})
export class FarmerRegisterComponent implements OnInit {
  constructor(
    private service: SharedService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
      conpassword: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
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
    } else if (
      this.loginForm.value.conpassword != this.loginForm.value.pwd
    ) {
      Swal.fire({
        icon: 'error',
        text: "Passwords don't match",
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.gender === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a gender',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.gender != "M" && this.loginForm.value.gender != "F") {
      console.log(this.loginForm.value.gender);
      Swal.fire({
        icon: 'error',
        text: 'Please enter either the letter "M" or "F"',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.maritalStatus === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a NIC',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.longitude === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter longitude',
        toast: true,
        position: 'bottom-right',
      });
      this.isValid = false;
    } else if (this.loginForm.value.latitude === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter latitude',
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

      sessionStorage.setItem('farmer', JSON.stringify(this.loginForm.value));
      // farmerRegistration
      this.service
        .farmerRegistration(this.loginForm.value)
        .subscribe((data) => {
          console.log(JSON.stringify(data));
          alert(JSON.stringify(data));
          this.router.navigate(['/farmer-login']);
        });
    }
  }
  // this.authService.login(this.loginForm.value);
  //this.router.navigateByUrl('/admin');
}
