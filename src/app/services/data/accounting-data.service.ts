import { Injectable, signal } from '@angular/core';
import { AccountingModel } from 'src/app/models/accounting.model';

@Injectable({
  providedIn: 'root'
})
export class AccountingDataService {

  public accounting = signal<AccountingModel[]>([]);

  constructor() { }

  readData = () => {
    const data = localStorage.getItem('accounting');
    if (data) this.accounting.set(JSON.parse(data));
  }

  saveData = () => {
    const data = JSON.stringify(this.accounting());
    localStorage.setItem('accounting', data);
  }

}
