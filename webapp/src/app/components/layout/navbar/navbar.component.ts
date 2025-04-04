import { Component } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService) { }

  // Logout
  logout() {
    this.authService.logout();
  }
}
