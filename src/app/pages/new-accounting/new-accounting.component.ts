import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountingDataService } from 'src/app/services/data/accounting-data.service';

@Component({
  selector: 'app-new-accounting',
  templateUrl: './new-accounting.component.html',
  styleUrls: ['./new-accounting.component.scss']
})
export class NewAccountingComponent {

  private fb = inject(FormBuilder);
  private accountingData = inject(AccountingDataService);

  public accountingForm = this.fb.group({
    title: [, [Validators.required]],
    amount: [0, [Validators.required]],
    description: [, [Validators.required]]
  });

  newAccounting = () => {

    console.log(this.accountingForm.value);
    if (this.accountingForm.invalid) return;


  }

}
