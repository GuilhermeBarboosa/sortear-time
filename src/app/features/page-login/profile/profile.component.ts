import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/dto/user';
import { UserInput } from 'src/app/interfaces/input/userInput';
import { LoginService } from 'src/app/routes/login.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TokenJwtService } from 'src/app/services/token-jwt.service';
import { UtilsService } from 'src/app/services/utils.service';
import { UserService } from '../../../routes/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private notifier: NotifierService,
    private token: TokenJwtService
  ) {}

  user?: User;
  userForm!: FormGroup;
  jogadorForm!: FormGroup;
  isDisabled = true;
  tipoPagina = 'CMS';
  Salvar = 'Salvar';
  async ngOnInit() {
    let idUser = await this.token.getIdUser();

    await this.userService.getById(Number(idUser)).subscribe((res) => {
      var userResponse = JSON.parse(JSON.stringify(res));
      this.user = userResponse;

      this.user!.name = this.utilsService.formatterString(this.user!.name);

      this.user!.data_de_nascimento = this.utilsService.formatarData(
        this.user!.data_de_nascimento
      );

      this.user!.created = this.utilsService.formatarData(
        this.user!.created
      );

      this.user!.updated = this.utilsService.formatarData(
        this.user!.updated
      );

      this.createTable();
    });
  }

  createTable() {
    this.userForm = this.formBuilder.group({
      name: [
        { value: this.user?.name, disabled: this.isDisabled },
        Validators.required,
      ],
      email: [
        { value: this.user?.email, disabled: this.isDisabled },
        [Validators.required],
      ],
      telefone: [
        { value: this.user?.telefone, disabled: this.isDisabled },
        [Validators.required],
      ],
      cep: [
        { value: this.user?.cpf, disabled: this.isDisabled },
        [Validators.required],
      ],
      rua: [
        { value: this.user?.rua, disabled: this.isDisabled },
        [Validators.required],
      ],
      data_de_nascimento: [
        { value: this.user?.data_de_nascimento, disabled: this.isDisabled },
        [Validators.required],
      ],
      cidade: [
        { value: this.user?.cidade, disabled: this.isDisabled },
        [Validators.required],
      ],
      bairro: [
        { value: this.user?.bairro, disabled: this.isDisabled },
        [Validators.required],
      ],
      cpf: [
        { value: this.user?.cpf, disabled: this.isDisabled },
        [Validators.required],
      ],
      estado: [
        { value: this.user?.estado, disabled: this.isDisabled },
        [Validators.required],
      ],
      numero: [
        { value: this.user?.numero, disabled: this.isDisabled },
        [Validators.required],
      ],
      complemento: [
        { value: this.user?.complemento, disabled: this.isDisabled },
        [],
      ]
    });
  }

  async salvarEdit() {
    if (this.userForm.valid) {
      let userDTO = {
        name: this.userForm.get('name')?.value,
        cpf: this.userForm.get('cpf')?.value,
        email: this.userForm.get('email')?.value,
        telefone: this.userForm.get('telefone')?.value,
        cep: this.userForm.get('cep')?.value,
        rua: this.userForm.get('rua')?.value,
        cidade: this.userForm.get('cidade')?.value,
        bairro: this.userForm.get('bairro')?.value,
        estado: this.userForm.get('estado')?.value,
        numero: this.userForm.get('numero')?.value,
        complemento: this.userForm.get('complemento')?.value,
        role: this.user?.idRole,
        data_de_nascimento: this.utilsService.formatarDataToSQL(
          this.userForm.get('data_de_nascimento')?.value
        ),
      };

      let userInput = new UserInput(userDTO);
      this.userService.edit(userInput, this.user!.id!).subscribe(
        async (data) => {
          this.loginService.logout();
          this.notifier.showSuccess('Usuário atualizado com sucesso!');
          this.loginService.logout();
        },
        (error) => {
          this.notifier.showError(error.error);
          return;
        }
      );
    } else {
      this.notifier.showError('Campos incorretos');
    }
    document.querySelector('#botaoEdit')?.classList.remove('hidden');
    document.querySelector('#salvarEdit')?.classList.add('hidden');
    this.isDisabled = true; // Altere para true ou false conforme necessário
    this.userForm.disable(); // Habilita todos os controles do formulário
  }

  editProfile() {
    document.querySelector('#botaoEdit')?.classList.add('hidden');
    document.querySelector('#salvarEdit')?.classList.remove('hidden');
    this.isDisabled = false; // Altere para true ou false conforme necessário
    this.userForm.enable(); // Habilita todos os controles do formulário
  }
}
