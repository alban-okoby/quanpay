import { Component } from '@angular/core';
import { DashMainComponent } from '../../components/dash-main/dash-main.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [DashMainComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {

}
