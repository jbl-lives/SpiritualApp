// auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FirstKeyPipe } from './pipes/first-key.pipe'; 
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FirstKeyPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule, 
    
    
  ],

  providers: [provideHttpClient()],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }