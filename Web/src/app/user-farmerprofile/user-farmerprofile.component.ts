import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-farmerprofile',
  templateUrl: './user-farmerprofile.component.html',
  styleUrls: ['./user-farmerprofile.component.css']
})
export class UserFarmerprofileComponent implements OnInit {

  constructor() { }


  headers = ['Product','Qty','Price'];

  rows = [
    {
      "Product":"1",
      "Qty":"50",
      "Price":"100.00"
    },
    {
      "Product":"2",
      "Qty":"150",
      "Price":"200.00"
    },
    {
      "Product":"3",
      "Qty":"500",
      "Price":"1000.00"
    },
    {
      "Product":"4",
      "Qty":"50",
      "Price":"500.00"
    },
    {
      "Product":"5",
      "Qty":"500",
      "Price":"1500.00"
    }
  ]

  qualityFlagType = [
    {
      "icon":"http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      "name":"Inedible"
    },
    {
      "icon":"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      "name":"Fair"
    },
    {
      "icon":"http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      "name":"Excellent"
    },
  ]

  ngOnInit(): void {
  }

}
