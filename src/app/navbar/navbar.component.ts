import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isLoginFormVisible: boolean = false;  // Initially hide the form
constructor(private router: Router)
{

}
  toggleLoginForm() {
    this.router.navigate(['/login'])

  }
  toggleSignUpForm() {
    this.router.navigate(['/signin'])

  }

}
