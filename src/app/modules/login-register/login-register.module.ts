import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    LoginRegisterRoutingModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TableModule,
    PasswordModule,
    PanelModule,
    ReactiveFormsModule,
    DividerModule,
    MenubarModule
  ]
})
export class LoginRegisterModule { }
