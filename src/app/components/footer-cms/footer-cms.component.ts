import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-footer-cms',
  templateUrl: './footer-cms.component.html',
  styleUrls: ['./footer-cms.component.css'],
})
export class FooterCmsComponent {
  constructor(public styleService: StyleService) {}
}
