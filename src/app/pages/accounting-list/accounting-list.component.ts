import { Component, inject } from '@angular/core';
import { AccountingModel } from 'src/app/models/accounting.model';
import { AccountingDataService } from 'src/app/services/data/accounting-data.service';
import { AccountingService } from 'src/app/services/localstorage/accounting.service';

@Component({
  selector: 'app-accounting-list',
  templateUrl: './accounting-list.component.html',
  styleUrls: ['./accounting-list.component.scss']
})
export class AccountingListComponent {

  private accontingService = inject(AccountingService);

  public accountingData = inject(AccountingDataService);

  public trackByFn = (index:number, accounting: AccountingModel) => {
    return accounting.id
  }

  public deleteAccounting = (id:string) => {
    this.accontingService.deleteAccounting(id);
  }


  public calculateAmountTotal = (accounting: AccountingModel) => {
    return (accounting.list.length === 0) ? accounting.amount : accounting.list[accounting.list.length - 1].amountTotal;
  }
}
