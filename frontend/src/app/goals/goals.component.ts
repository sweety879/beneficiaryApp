import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GoalService } from '../services/goal/goal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})

export class GoalsComponent implements OnInit {

   goals:Array<{ _id: string, text: string}>=[ ];
  constructor(private _goalService: GoalService,
              private _router: Router) { }

  ngOnInit(): void {
    this._goalService.getGoals()
          .subscribe(
            res => this.goals =res,
            err => {
              if(err instanceof HttpErrorResponse){
                 if(err.status===401)
                    this._router.navigate(['/login'])
              }

            }
          )
  }

}
