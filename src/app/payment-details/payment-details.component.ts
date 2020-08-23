import { Component, OnInit } from '@angular/core';
import {Payment} from '../model/payment';
import {PaymentServiceService} from '../service/payment-service.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  payment: Payment[];
  detail: any;

  constructor(
    private paymentServiceService: PaymentServiceService
  ) { }

  ngOnInit(): void {

    this.paymentServiceService.findAll().subscribe(data => {
      this.payment = data;
    });
  }

}
