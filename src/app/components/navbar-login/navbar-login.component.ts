import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/routes/login.service';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css'],
})
export class NavbarLoginComponent implements OnInit {
  nameUser: any = '';

  @Input() value: string | undefined;
  ngOnInit(): void {
    this.nameUser = localStorage.getItem('user');
  }

  constructor(
    private loginService: LoginService
  ) {}

  async logout() {
    this.loginService.logout();
  }
}
