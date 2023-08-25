import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountingListComponent } from './pages/accounting-list/accounting-list.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { NewAccountingComponent } from './pages/new-accounting/new-accounting.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountingListComponent,
    AccountingComponent,
    NewAccountingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
