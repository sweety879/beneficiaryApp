import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {

  account_id: string = '';
  transactions:any;
  constructor(private _accountService:AccountService,private _router: Router) { 
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state as {accountId: string};
    this.account_id = state.accountId;
    console.log(state)
  }

  ngOnInit(): void {
    this._accountService.transactionSummary(this.account_id)
          .subscribe(
            res => {
              if(res)
                {
                  this.transactions =res
                }else{
                  console.log("no response")
                }

            },
            err => {
              if(err instanceof HttpErrorResponse){
                 if(err.status===401)
                    this._router.navigate(['/login'])
              }
                console.log(err)
            }
          )
  }


}
