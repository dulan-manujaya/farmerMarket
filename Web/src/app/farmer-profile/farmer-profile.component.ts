import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.component.html',
  styleUrls: ['./farmer-profile.component.css']
})
export class FarmerProfileComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
