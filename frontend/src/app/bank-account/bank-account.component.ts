import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {

  accounts:Array<{ _id:string,bankAccountNumber: string, accountType: string,balance: number }>=[ ];  
  constructor(private _accountService: AccountService,
              private _router: Router) { }

  ngOnInit(): void {
    this._accountService.getAccounts()
          .subscribe(
            res => this.accounts =res,
            err => {
              if(err instanceof HttpErrorResponse){
                 if(err.status===401)
                    this._router.navigate(['/login'])
              }

            }
          )
  }

  onClickBeneficiary(id:string){
    const navigationExtras: NavigationExtras = {state: {accountId:id }};
      this._router.navigate(['beneficiary'], navigationExtras);
  }

  onClickSummary(id:string){
    const navigationExtras: NavigationExtras = {state: {accountId: id}};
      this._router.navigate(['transactionsummary'], navigationExtras);
  }

}






