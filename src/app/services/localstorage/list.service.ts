import { Injectable, inject } from '@angular/core';
import { TypeListEnum } from 'src/app/enum/type-list.enum';
import { ListInterface } from 'src/app/interface/list';
import { ListModel } from 'src/app/models/list.model';

import { v4 as uuidv4 } from 'uuid';
import { AccountingDataService } from '../data/accounting-data.service';
import { AccountingModel } from 'src/app/models/accounting.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private accountingData = inject(AccountingDataService);

  constructor() { }

  addNewListToAccounting = (id: string, listForm: ListInterface) => {

    const data = new ListModel(
      uuidv4(),
      listForm.amount,
      listForm.date,
      listForm.description,
      TypeListEnum.BODY
    );

    this.accountingData.accounting.update((accountingData:AccountingModel[]) => {
      accountingData = accountingData.map((accounting: AccountingModel) => {
        if (accounting.id === id){
          accounting.list.push(
            data
          );
        }
        return accounting;
      });
      return accountingData;

    });

    this.accountingData.saveData();

  }



}
