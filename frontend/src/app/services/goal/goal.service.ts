import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private _goalsUrl = "http://localhost:5000/api/goals"
  constructor(private http:HttpClient) { }

  getGoals(){
    return this.http.get<any>(this._goalsUrl)
  }

}
