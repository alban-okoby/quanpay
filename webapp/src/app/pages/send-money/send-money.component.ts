import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-send-money',
  standalone: true,
  imports: [NgOtpInputModule, NgOtpInputComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './send-money.component.html',
  styleUrl: './send-money.component.scss'
})
export class SendMoneyComponent implements OnInit {
  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput!: NgOtpInputComponent;
  otpForm!: any;
  otpData: any;
  isLoading: boolean = false;
  config = {
    allowNumbersOnly: true,
    autoFocus: true,
    isPasswordInput: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  }

  ngOnInit() {
    this.otpData = {
      otpCode: []
    }
  }
  onOtpChange(otpData: any) {
    console.log(this.otpData);
  }

  validateSendingMoney(): boolean {
    if (this.otpData.otpCode.length == 6) {
      this.isLoading = true;
      return true;
    } else {
      this.isLoading = false;
      return false;
    }
  }

}
