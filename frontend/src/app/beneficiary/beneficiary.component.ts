import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { AccountService } from '../services/account/account.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit {

  account_id: string = '';
  account_number:string='';
  receiver:any;
  amount!: number;
  verify:string='';
  constructor(private _accountService:AccountService,private _router: Router) { 
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state as {accountId: string};
    this.account_id = state.accountId;
    console.log(state)
  }

  ngOnInit(): void {
    this.verify='pending'
  }
  onClickVerify(){
    if(this.account_id===this.account_number)
      {
         this.verify= 'noself'
         return
      }
    this._accountService.verifyAccount(this.account_number)
          .subscribe(
            res => {
              if(res)
                {
                  this.receiver =res
                  if(this.account_id===res._id)
                  {
                     this.verify= 'noself'
                     
                  }else{
                    this.verify = 'verified'
                  }

                }
                else{
                  this.verify = 'notExist'
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

  onSendAmount(){   
    this._accountService.transaction({sender_id:this.account_id,receiver_id:this.receiver._id,amount:this.amount})
          .subscribe(
            res => {
              if(res)
                {
                  this.receiver =res
                  const navigationExtras: NavigationExtras = {state: {accountId: this.account_id}};
                  this._router.navigate(['transactionsummary'], navigationExtras);
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
