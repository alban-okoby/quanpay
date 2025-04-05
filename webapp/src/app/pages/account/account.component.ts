import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { SendMoneyComponent } from '../send-money/send-money.component';
import { SendMoneyOtpComponent } from '../../components/send-money-otp/send-money-otp.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor(
    public dialog: MatDialog
  ) { }

  openSendMoneyDialog(): void {
    this.dialog.open(SendMoneyOtpComponent, {
      width: '640px',
      disableClose: false,
    });
    // Logique de transfert
  }
}
