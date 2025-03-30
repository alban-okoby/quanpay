import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarCollapseComponent } from "./sidebar-collapse/sidebar-collapse.component";
import { DashMainComponent } from '../dash-main/dash-main.component';
import { DashbordComponent } from "../../pages/dashbord/dashbord.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, SidebarCollapseComponent, DashMainComponent, DashbordComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
