import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations:[
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', 
        [
          style({ opacity:0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true}),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
      //'* <=> *' We saying that anything that we put on the second parameter, any transition we input.
    ])
  ]
})

export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  //Informació a presentar per pantalla. Assegurar-se not null no apareix.
  ngOnInit() {//Any code inside here will execute in init.
    //access to properties on our dataservice is like this:
    this.data.getUsers().subscribe( //subscribe to the observable
      data => this.users$ =  data
    )
  }

}
