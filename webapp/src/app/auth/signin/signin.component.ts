import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

// Custom elements
import { AuthService } from '../service/auth.service';
import { LoginRequest } from '../models/login.request';
import { Routes } from '../../core/routes/routes';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  routes: Routes = new Routes();
  showPassword: string = 'password';
  show = false;

  form!: UntypedFormGroup;
  isLoggedIn = false;
  isLogginFailled = false;
  errorMessage = '';
  roles: string[] = [];

  invalidLogin = false;
  loginModel: LoginRequest = new LoginRequest();
  CustomControler: any;
  isRequesting: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    // private readonly commonService: CommonService,
  ) {}

  ngOnInit() {
    this.creatSignInForm();
  }

  // get f() {
  //   return this.form.controls;
  // }

  creatSignInForm() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.form = this.formBuilder.group({
      email: [this.loginModel.email, [Validators.pattern(emailPattern)]],
      password: [this.loginModel.password, [Validators.required]],
      // resolved: [this.loginModel.resolved, [Validators.requiredTrue]],
    });
  }

  get email() {
    return this.form.get('email') as FormControl;
  }
  get password() {
    return this.form.get('password') as FormControl;
  }
  emailErrors() {
    return this.email.hasError('pattern')
      ? "Cet email n'est pas valide"
      : '';
  }
  onSubmit() {
      this.isRequesting = true;
      this.auth.signIn(this.loginModel).subscribe(
        (res: any) => {
          // if (res.status != 400 || 500) {
            // @ts-ignore
            // localStorage.token = res.token;
            const userRoles = res.user.roles[0];

            localStorage.setItem('userRoles', userRoles);
            localStorage.setItem('token', res.accessToken);

            const rolesName = res.user.roles.map((role: any) => role.name);
            const rolesId = res.user.roles.map((role: any) => role.id);
            localStorage.setItem('qsdfghjklmpoiuytreza', userRoles);

            const array1 = Math.floor(Math.random() * 999999999999999);
            const array2 = Math.floor(Math.random() * 999999999999999);

            localStorage.setItem('wxcvbnmlkjhgfdsqazertyuiop', array1 + rolesId + array2);
            localStorage.setItem('response', res.status);
            this.isLoggedIn = true;
            localStorage.setItem('fuckYou', 'true');

            //success msg
            setTimeout(() => {
              if (res.user.email != null && userRoles == 'ROLE_ADMIN') {
                this.router.navigateByUrl('/business/dashboard');
                this.showSuccessMessage(res.user.name);
                setTimeout(() => {
                  window.location.reload();
                }, 1500)
              }
              if (res.user.email != null && ( userRoles == 'ROLE_USER' || userRoles == 'ROLE_HEAD')) {
                this.router.navigateByUrl('/account/profil');
                setTimeout(() => {
                  window.location.reload();
                }, 1500)
                this.showSuccessMessage(res.user.displayName);
              }else {
                this.router.navigateByUrl('/');
              }
          }, 3100)

          // }
        },
        (err: any) => {
          // Error msg
          setTimeout(() => {
            this.isRequesting = false;
            this.showErorMessage();
            setTimeout(() => {
              // this.commonService.playErrorNotificationAudio();
            }, 300)
            // this.badCredentials();
          }, 1100)
        }
      );
  }

    /**
   * badCredentials : Message en cas d'identifiants incorrects
   * @return Nothing
   */
  badCredentials() {
    Swal.fire({
      icon: 'error',
      title: 'Oops... !',
      timer: 3000,
      text: 'Identifiants incorrects !',
    });
  }

  showSuccessMessage(username: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: `Content de vous revoir 🖐🏽 ${username}`,
      timer: 5000,
    });
  }

  showErorMessage(username?: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: `Identifiants incorrects ❌`,
      timer: 5000,
    });
  }

  /**
   * onClick - Show or hide password
   * @return Nothing
   */
  onClick() {
    if (this.showPassword === 'password') {
      this.showPassword = 'text';
      this.show = true;
    } else {
      this.showPassword = 'password';
      this.show = false;
    }
  }
}
