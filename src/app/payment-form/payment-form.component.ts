import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../model/payment';
import { PaymentServiceService } from '../service/payment-service.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm: FormGroup
  price: string;
  payment: Payment

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private paymentServiceService: PaymentServiceService
  ) {
    this.payment = new Payment();
  }

  ngOnInit(): void {

    this.paymentForm = this.formBuilder.group({
      subsSelection: null,
      price: null,
    })

    this.paymentForm.controls['subsSelection'].valueChanges.subscribe(value => {
      switch (value) {
        case "DAILY": this.price = "1.50"; break;
        case "WEEKLY": this.price = "7.50"; break;
        case "MONTHLY": this.price = "15.90"; break;
        default: break;
      }
    });
  }

  submitPayment() {

    this.paymentServiceService.save(this.payment).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/viewInvoice']);
  }
}
