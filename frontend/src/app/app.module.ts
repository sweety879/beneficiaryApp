import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { AuthService } from './services/auth/auth.service';
import { GoalService } from './services/goal/goal.service';
import { AccountService } from './services/account/account.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GoalsComponent,
    BankAccountComponent,
    BeneficiaryComponent,
    TransactionSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService,GoalService,AuthGuard,AccountService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
