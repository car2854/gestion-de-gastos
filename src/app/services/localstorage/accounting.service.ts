import { Injectable, inject } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';
import { AccountingDataService } from '../data/accounting-data.service';
import { Accounting } from 'src/app/interface/accounting';
import { AccountingModel } from 'src/app/models/accounting.model';
import { StatusAccountingEnum } from 'src/app/enum/status-accountin.enum';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  private accountingData = inject(AccountingDataService);

  constructor() { }

  public newAccounting = (accounting: Accounting) => {
    const newAccounting = new AccountingModel(
      uuidv4(),
      accounting.title,
      accounting.amount,
      new Date(Date.now()),
      accounting.description,
      StatusAccountingEnum.IN_PROCESS,
      []
    );
    this.accountingData.accounting.update((data) => [...data, newAccounting]);
    this.accountingData.saveData();
  }

  public deleteAccounting = (id:string) => {
    this.accountingData.accounting.update((accountingModel : AccountingModel[]) => accountingModel.filter((accounting: AccountingModel) => accounting.id != id).map(_ => _));
    this.accountingData.saveData();
  }
}
