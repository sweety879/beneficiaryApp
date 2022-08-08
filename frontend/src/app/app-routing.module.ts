import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
     path:'goals',
     component : GoalsComponent,
     canActivate:[AuthGuard]
  },
  {
    path:'accounts',
    component : BankAccountComponent,
    canActivate:[AuthGuard]
 },
 {
  path:'beneficiary',
  component : BeneficiaryComponent,
  canActivate:[AuthGuard]
 },
 {
  path:'transactionsummary',
  component : TransactionSummaryComponent,
  canActivate:[AuthGuard]
 },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
