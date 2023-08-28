import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountingModel } from 'src/app/models/accounting.model';
import { ListModel } from 'src/app/models/list.model';
import { AccountingDataService } from 'src/app/services/data/accounting-data.service';
import { ListService } from 'src/app/services/localstorage/list.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent {

  private fb = inject(FormBuilder);
  private listService = inject(ListService);
  private route = inject(ActivatedRoute);
  private accountingData = inject(AccountingDataService);

  public accounting!: AccountingModel;
  public id: string = '';

  public amount = 0;

  public listForm = this.fb.group({
    amount: [0,[Validators.required]],
    date: [],
    description: [,[Validators.required]]
  });

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id') || '0';

    this.accountingData.accounting().forEach((accounting: AccountingModel) => {
      if (accounting.id === this.id) this.accounting = accounting;    
    });

  }

  addNewList = () => {
    
    if (this.listForm.invalid) return;

    this.listService.addNewListToAccounting( this.id , {
      amount: this.listForm.get('amount')!.value || 0,
      date: new Date(this.listForm.get('date')!.value || Date.now()),
      description: this.listForm.get('description')!.value || ''
    });
    
    this.listForm.setValue({
      amount: 0,
      date: null,
      description: null
    });
    
  }

  trackByFn = (index: number, accountingList: ListModel) => {
    return accountingList.id;
  }

  public delete = (listId: string) => {
    this.listService.deleteList(this.id, listId);
  }

}
