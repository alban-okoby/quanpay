import { Component } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { UsersService } from '../../../core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentUser: any;
  isLogged: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {
    this.userService.currentUser().subscribe((user: any) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
    const token = this.authService.getCookie('YXV0aGVudGljYXRlZCI6dHJ1Z');
  }

  // Logout
  logout() {
    this.authService.logout();
  }
}
