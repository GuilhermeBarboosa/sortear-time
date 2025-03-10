import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonPrimaryComponent } from '../components/button-primary/button-primary.component';
import { ButtonSecundaryComponent } from '../components/button-secundary/button-secundary.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { FooterCmsComponent } from '../components/footer-cms/footer-cms.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarLoginComponent } from '../components/navbar-login/navbar-login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    MatSortModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  exports: [
    DialogComponent,
    NavbarComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    FooterCmsComponent,
    NavbarLoginComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    RouterModule,
    MatSortModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  declarations: [
    DialogComponent,
    FooterCmsComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    NavbarLoginComponent,
    ButtonSecundaryComponent,
  ],
  providers: [],
})
export class SharedModule {}
