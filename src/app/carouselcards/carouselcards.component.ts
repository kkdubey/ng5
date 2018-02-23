import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-carouselcards',
  templateUrl: './carouselcards.component.html',
  styleUrls: ['./carouselcards.component.css'],
  animations: [
    trigger('goals', [
      state('right', style({
          transform: 'scale(1)',
      })),
      state('left', style({
          transform: 'scale(1)',
      })),
      transition('* => *', animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-90%)', offset: 0 }),
            style({ opacity: 2, transform: 'translateX(-75%)', offset: .1 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ]))),
      transition('left => right', animate('.6s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
        style({ opacity: 0, transform: 'translateX(75%)', offset: 1 })
      ])))
  ]),
    trigger('goals', [
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
export class CarouselcardsComponent implements OnInit {

  itemCount: Number = 0;
  btn: Number = 0;
  goals = [];
  constructor() { }

  ngOnInit() {
    let goal = {};
    for (let i = 1; i <= 10; i++) {
      goal = {name: 'Test Name ' + i,
        imgurl: 'http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16',
        paraText: 'From the restored 540 K Streamliner to the all-new S65 AMG Coupe to the Concept Coupe SUV, last weekend in ' +
        'Monterey was a celebration of the Mercedes-Benz coupe.'
      };
      this.goals.push(goal);
    }
  }

  addItem() {
    const goal = {name: 'Test Name new',
        imgurl: 'http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16',
        paraText: 'From the restored 540 K Streamliner to the all-new S65 AMG Coupe to the Concept Coupe SUV, last weekend in ' +
        'Monterey was a celebration of the Mercedes-Benz coupe.'
      };
      this.goals.push(goal);
  }

}
