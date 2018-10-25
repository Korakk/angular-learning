import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  currentUrl: String;

  constructor( private router: Router) {//_: Navigation end --> saber que ha acabat.
    router.events.subscribe(_ => {
      if(_ instanceof NavigationEnd){
        this.currentUrl = _.url;
      }
   });
}

  ngOnInit() {
  }

}
