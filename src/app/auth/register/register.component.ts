import { Component, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl} from '@angular/forms';
import { AuthService } from '../auth.service';
import { NotificationService } from '../../shared/services/notification-service.service'; 
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';

// Define the RegisterForm interface
interface RegisterForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
  terms: FormControl<boolean | false>;
 
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup<RegisterForm>;
  isSubmitted: boolean = false;

  

  constructor(
    public formBuilder: FormBuilder,
    private service: AuthService,
    private notificationService: NotificationService
  ) {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\+?\d{10,15}$/), // Phone pattern
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/), // At least one special character
          ],
        ],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator } // Attach validator here
    ) as FormGroup<RegisterForm>;
  }
  
  @ViewChild(LoadingIndicatorComponent) loadingIndicator!: LoadingIndicatorComponent;

  passwordMatchValidator: ValidatorFn = (group: AbstractControl): null | object => {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
  
    if (password && confirmPassword) {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPassword.setErrors(null);
      }
    }
    return null;
  };
  
  
  

  hasError<K extends keyof RegisterForm>(controlName: K, errorName: string): boolean {
    return this.form.controls[controlName]?.hasError(errorName);
  }

  hasDisplayError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || this.isSubmitted);
  }

  getFirstErrorKey(controlName: keyof RegisterForm): string | null {
    const control = this.form.get(controlName);
    if (control && control.errors) {
      return Object.keys(control.errors)[0]; // Returns the first error key (e.g., 'required')
    }
    return null;
  }
  
  

  onRegister() {
    
    this.isSubmitted = true;
    this.loadingIndicator.show(); // Show the loading indicator

    if (this.form.valid) {
      this.service.createUser(this.form.value).subscribe({
        next: (response: any) => {
          this.loadingIndicator.hide();
          if (response.succeeded) {
            this.form.reset();
            this.isSubmitted = false;
            this.notificationService.show('Registration Successful!');
          } else {
            response.errors.forEach((error: any) => {
              this.loadingIndicator.hide();
              switch (error.code) {
                case 'DuplicateUserName':
                  this.notificationService.show('The username is already taken.');
                  break;
                case 'DuplicateEmail':
                  this.notificationService.show('The email is already registered.');
                  break;
                default:
                  this.notificationService.show('An unexpected error occurred.');
                  console.error('Unexpected error:', error);
                  break;
              }
            });
          }
        },
        error: (error) => {
          this.loadingIndicator.hide();
          if (error.status === 400 && error.error.errors) {
            error.error.errors.forEach((e: any) => {
              this.notificationService.show(e.description);
            });
          } else {
            this.notificationService.show('An unexpected error occurred. Please try again later.');
            console.error('An unexpected error occurred:', error);
          }
        },
      });
    } else {
      this.loadingIndicator.hide();
      this.notificationService.show('Please fix the errors in the form before submitting.');
    }
  }
  
  
  
  
}








// // Define the strongly-typed form
  // form: FormGroup = this.formBuilder.group(
  //   {
  //     firstName: new FormControl('', Validators.required),
  //     lastName: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     phone: new FormControl('', Validators.required),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(6),
  //       Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/), // At least one special character
  //     ]),
  //     confirmPassword: new FormControl('', Validators.required),
  //   },
  //   { validators: this.passwordMatchValidator }
  // );
