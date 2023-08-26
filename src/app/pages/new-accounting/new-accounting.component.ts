import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { AccountingDataService } from 'src/app/services/data/accounting-data.service';
import { AccountingService } from 'src/app/services/localstorage/accounting.service';

@Component({
  selector: 'app-new-accounting',
  templateUrl: './new-accounting.component.html',
  styleUrls: ['./new-accounting.component.scss']
})
export class NewAccountingComponent {

  private fb = inject(FormBuilder);
  private accountingService = inject(AccountingService);
  private router = inject(Router);

  public accountingForm = this.fb.group({
    title: [, [Validators.required]],
    amount: [0, [Validators.required]],
    description: [, [Validators.required]]
  });

  newAccounting = () => {

    console.log(this.accountingForm.value);
    if (this.accountingForm.invalid) return;

    this.accountingService.newAccounting({
      amount: this.accountingForm.get('amount')!.value || 0,
      description: this.accountingForm.get('description')!.value || '',
      title: this.accountingForm.get('title')!.value || '',
    });

    this.router.navigateByUrl('/dashboard/accounting-list');


  }

}
