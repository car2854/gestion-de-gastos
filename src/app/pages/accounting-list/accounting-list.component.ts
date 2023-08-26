import { Component, inject } from '@angular/core';
import { AccountingModel } from 'src/app/models/accounting.model';
import { AccountingDataService } from 'src/app/services/data/accounting-data.service';

@Component({
  selector: 'app-accounting-list',
  templateUrl: './accounting-list.component.html',
  styleUrls: ['./accounting-list.component.scss']
})
export class AccountingListComponent {

  public accountingData = inject(AccountingDataService);

  public trackByFn = (index:number, accounting: AccountingModel) => {
    return accounting.id
  }
}
