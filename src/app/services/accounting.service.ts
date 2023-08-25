import { Injectable, inject } from '@angular/core';
import { Accounting } from '../interface/accounting';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  constructor() {}

  newAccounting = (data:Accounting) => {
  }
}
