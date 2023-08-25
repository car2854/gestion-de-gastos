import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-new-accounting',
  templateUrl: './new-accounting.component.html',
  styleUrls: ['./new-accounting.component.scss']
})
export class NewAccountingComponent {

  private fb = inject(FormBuilder);


  newAccounting = () => {

  }

}
