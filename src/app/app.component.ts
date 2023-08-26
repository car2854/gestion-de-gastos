import { Component, inject } from '@angular/core';
import { AccountingDataService } from './services/data/accounting-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accounting-angular';
  
  private accounting = inject(AccountingDataService);

  constructor(){
    this.accounting.readData();
  }
}
