import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-secundary',
  templateUrl: './button-secundary.component.html',
  styleUrls: ['./button-secundary.component.css'],
})
export class ButtonSecundaryComponent {
  @Input() value: string | undefined;
}
