import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  constructor() { }
  latitude=51.678418; 
  longitude=7.809007; 
  location(x){ 
    this.latitude=x.coords.lat; 
    this.longitude=x.coords.lng; 
  }
  ngOnInit(): void {
  }

}
