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
          accounting.list = accounting.list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());            
        }
        return accounting;
      });
      return accountingData;
    });

    this.accountingData.saveData();

  }

  deleteList = (idAccounting:string, idList:string) => {
    this.accountingData.accounting.update((accountingModel: AccountingModel[]) => {

      accountingModel = accountingModel.map((accountingModelData: AccountingModel) => {
        if (accountingModelData.id === idAccounting){
          accountingModelData.list = accountingModelData.list.filter((listModel: ListModel) => listModel.id != idList).map((_) => _);
        }
        return accountingModelData;
      });
      
      return accountingModel
    });
    
    this.accountingData.saveData();

  }

}
