import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {//Any code inside here will execute in init.
    //access to properties on our dataservice is like this:
    this.data.getUsers().subscribe( //subscribe to the observable
      data => this.users$ =  data
    )
  }

}
