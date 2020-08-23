import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../model/payment';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  private paymentUrl: string;

  constructor(private http: HttpClient) { 
    this.paymentUrl = 'http://localhost:8080/payment';
  }

  public findAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }
 
  public save(payment: Payment) {
    return this.http.post<Payment>(this.paymentUrl, payment);
  }

}
