import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ErrorMessage } from '../models/error.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean = false;
  baseUrl: string = environment.apiUrl;
  error: string = '';
  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private route: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.title.setTitle("Login");
    this.loginFormValidation();
  }

  loginFormValidation(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: [ '', [Validators.required, Validators.email] ],
        password: [ '', [Validators.required ] ],
      }
    );
  }

  get l() {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.error = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.http.put(this.baseUrl + 'users', this.loginForm.value).subscribe((data: User) => {
      this.storage.setLogin(data);
      this.route.navigate(['/home']);
    }, (err: ErrorMessage) =>{
        this.error = err.error.message;
    });
  }
}
