import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accountsUrl = "http://localhost:5000/api/users/bankAccounts"

  constructor(private http:HttpClient) { }

  getAccounts(){
    return this.http.get<any>(this._accountsUrl)
  }
  
  verifyAccount(account_number:any){
    return this.http.get<any>(this._accountsUrl+'/verify/'+account_number)
  }

  transaction(data:any){
    return this.http.post<any>(this._accountsUrl+'/transactions',data)
  }

  transactionSummary(account_id:any){
    console.log(account_id)
    return this.http.get<any>(this._accountsUrl+'/transactions/'+account_id)
  }
}
