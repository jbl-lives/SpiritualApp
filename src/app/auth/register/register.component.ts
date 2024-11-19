import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public formBuilder: FormBuilder){}

  form = this.formBuilder.group({
    name : [''],
    surname : [''],
    email : [''], 
    phone : [''],
    passoword : [''],
    confirmPassword : ['']
  })

  onRegister(){
    
  }

}
