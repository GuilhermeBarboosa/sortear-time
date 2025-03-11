import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInput } from 'src/app/interfaces/input/login-input';
import { LoginService } from 'src/app/routes/login.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TokenJwtService } from 'src/app/services/token-jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  value = 'Entrar';
  constructor(
    private loginService: LoginService,
    private tokenJwtService: TokenJwtService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notifier: NotifierService
  ) {}

  loginForm!: FormGroup;
  tipoPagina = 'USER';

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (localStorage.getItem('email') != null) {
      this.loginForm.get('email')?.setValue(localStorage.getItem('email'));
      localStorage.removeItem('email');
    }

    if (localStorage.getItem('token') != null) {
      if (!this.tokenJwtService.isTokenExpired(localStorage.getItem('token'))) {
        this.router.navigateByUrl('cms/home');
      }
    }
  }

  login() {
    if (this.loginForm.valid) {
      let loginInput = new LoginInput(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      );
      this.loginService.login(loginInput).subscribe(
        (loginResponse: any) => {
          var loginJson = JSON.parse(JSON.stringify(loginResponse));
          this.tokenJwtService.setToken(loginJson);
          this.loginService.obterClaims().subscribe(
            (claims: any) => {
              var claimsResponse = JSON.parse(JSON.stringify(claims));
              localStorage.setItem('user', claimsResponse.name);
              this.notifier.showSuccess('Login efetuado com sucesso!');

              console.log('Login');
              this.router.navigateByUrl('cms/home');
              console.log('Testes');
            },
            (error: any) => {
              this.notifier.showError('Login ou senha incorretos!');
            }
          );
        },
        (error: any) => {
          this.notifier.showError('Login ou senha incorretos!');
        }
      );
    } else {
      this.notifier.showError('Preencha todos os campos!');
    }
  }

  showPassword() {
    let input = document.querySelector('#password') as HTMLInputElement;
    input!.type = input!.type === 'text' ? 'password' : 'text';
  }
}
