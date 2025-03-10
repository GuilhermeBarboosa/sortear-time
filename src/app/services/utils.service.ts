import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import * as saveAs from 'file-saver';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private toast: NotifierService) {}

  formatarDataToSQL(data: any) {
    data = data.split('/').reverse().join('/');
    data = new Date(data);
    return data;
  }

  formatarData(data: any) {
    data = data.split('T')[0].split('-').reverse().join('/');
    return data;
  }

  formatarDataEHora(data: any) {
    const [dataParte, horaParte] = data.split('T');

    const dataFormatada = dataParte.split('-').reverse().join('/');

    if (horaParte) {
      const horaFormatada = horaParte.split(':').slice(0, 2).join(':');
      return `${dataFormatada} ${horaFormatada}`;
    }

    return dataFormatada;
  }

  formatterString(string: string) {
    string = string.toLowerCase();
    string = string.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
      letra.toUpperCase()
    );

    return string;
  }

  validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
    }

    return true;
  }

  decoteBase64(base64: string) {
    return atob(base64);
  }

  ordenarAlfabetico(array: any[]) {
    const compararEdital = (a: { edital: string }, b: { edital: string }) => {
      const editalA = a.edital.toLowerCase();
      const editalB = b.edital.toLowerCase();

      if (editalA < editalB) {
        return -1;
      }
      if (editalA > editalB) {
        return 1;
      }
      return 0;
    };

    return array.slice().sort(compararEdital);
  }

  saveArquivo(data: Blob, name: string) {
    saveAs(data, name);
  }

  generateSHA256Hash(): string {
    const randomWord = this.generateRandomWord();
    return CryptoJS.MD5(randomWord).toString(CryptoJS.enc.Hex);
  }

  private generateRandomWord(): string {
    const randomWordLength = 10;
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomWord = '';
    for (let i = 0; i < randomWordLength; i++) {
      randomWord += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomWord;
  }

  remove_accents(strAccents: any) {
    strAccents = strAccents.split('');
    let strAccentsOut = new Array();
    let strAccentsLen = strAccents.length;
    let accents =
      'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    let accentsOut =
      'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeCcdDIIIIiiiiUUUUuuuuNnSsYyyZz';
    for (let y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) != -1) {
        strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
      } else strAccentsOut[y] = strAccents[y];
    }
    strAccents = strAccentsOut.join('');

    return strAccents;
  }

  getFormValidationErrors(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      const control = form.get(key);
      if (control) {
        const controlErrors: ValidationErrors | null = control.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            // console.log(
            //   'Key control: ' +
            //     key +
            //     ', keyError: ' +
            //     keyError +
            //     ', err value: ',
            //   controlErrors[keyError]
            // );

            console.log(control);
            this.toast.showError(`O campo ${key} está incorreto`);
          });
        }
      }
    });
  }

  generateColors() {
    var o = Math.round,
      r = Math.random,
      s = 255;

    var blue = o(r() * s);
    var green = o(r() * 5);
    var red = o(r() * 5);

    return 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.75 + ')';
  }

  generateColorsRandom() {
    var r = Math.floor(Math.random() * 256); // Valor de vermelho entre 0 e 255
    var g = Math.floor(Math.random() * 256); // Valor de verde entre 0 e 255
    var b = Math.floor(Math.random() * 256); // Valor de azul entre 0 e 255

    return 'rgba(' + r + ',' + g + ',' + b + ',' + 0.75 + ')';
  }
}
