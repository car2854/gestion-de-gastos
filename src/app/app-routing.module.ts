import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountingListComponent } from './pages/accounting-list/accounting-list.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { NewAccountingComponent } from './pages/new-accounting/new-accounting.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'accounting-list',
        component: AccountingListComponent
      },
      {
        path: 'accounting/:id',
        component: AccountingComponent
      },
      {
        path: 'new-accounting',
        component: NewAccountingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
