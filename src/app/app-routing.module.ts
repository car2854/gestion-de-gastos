import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountingListComponent } from './pages/accounting-list/accounting-list.component';
import { AccountingComponent } from './pages/accounting/accounting.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
