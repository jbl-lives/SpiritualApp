import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NotificationService } from '../../shared/services/notification-service.service';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup<LoginForm>;
  isSubmitted: boolean = false;

  constructor(
    private router: Router, 
    public formBuilder:FormBuilder, 
    private service:AuthService,
    private notificationService: NotificationService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  @ViewChild(LoadingIndicatorComponent) loadingIndicator!: LoadingIndicatorComponent;

  hasDisplayError(controlName: keyof LoginForm): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || this.isSubmitted);
  }

  getErrorMessage(controlName: keyof LoginForm): string | null {
    const control = this.form.get(controlName);
    if (control && control.errors) {
      if (control.errors['required']) return '* This field is required!';
      if (control.errors['email']) return '* Please enter a valid email address!';
      if (control.errors['minlength'])
        return `* Minimum length is ${control.errors['minlength'].requiredLength} characters!`;
    }
    return null;
  }

  onLoginSubmit() {
    this.isSubmitted = true;
    this.loadingIndicator.show();

    if (this.form.valid) {
      this.service.signIn(this.form.value).subscribe({
        next: (response: any) => {
          this.loadingIndicator.hide(); // Hide on success
          localStorage.setItem('authToken', response.token); // Consistent key name
          console.log("Stored Token:", localStorage.getItem('authToken')); // Verify token value
          this.router.navigateByUrl('/dashboard-page');
        },
        error: (err) => {
          this.loadingIndicator.hide(); // Hide on error
          console.error('Login Error:', err); // Log the full error object
          if (err.status === 400) {
            this.notificationService.show('Incorrect email or password.');
          } else if (err.status === 401) { // Example for 401
            this.loadingIndicator.hide(); // Hide on error
            this.notificationService.show('Unauthorized. Please try again.');
          } else {
            this.loadingIndicator.hide(); // Hide on error
            this.notificationService.show('An error occurred during login. Please try again later.'); // Generic message
          }
        },
      });
    }
  }
}
