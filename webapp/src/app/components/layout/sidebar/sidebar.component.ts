import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private authService: AuthService) { }

  // Logout
  logout() {
    this.authService.logout();
  }
}
