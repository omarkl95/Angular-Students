import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup;

  message: string = '';
  constructor(    private router: Router
    ) { }

  ngOnInit() {
    this.initLoginForm();
    console.log(this.loginForm);
  }
  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
    });
  }
  onLogin() {
    console.log(this.loginForm.value);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('token', this.loginForm.value);
    console.log(localStorage.getItem('token'));
    this.router.navigate(['/gallery']);
  }
}
