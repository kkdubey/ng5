import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goalss', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-90%)', offset: 0 }),
            style({ opacity: 2, transform: 'translateX(-75%)', offset: .1 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ]))
        ]), { optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateX(75%)', offset: 1 })
          ]))
        ]), { optional: true}),

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: String = 'Add an item';
  goalText: String = 'My goal';
  goals = [];

  constructor(private _data: DataService, private router: Router) {
    this.router.events.subscribe(event => {
      window['ga']('set', 'page', event);
      window['ga']('send', event);
    });
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

}
