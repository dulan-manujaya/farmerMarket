import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.component.html',
  styleUrls: ['./farmer-profile.component.css']
})
export class FarmerProfileComponent implements OnInit {

  constructor(private service:SharedService) { }


  headers = ['Product','Qty','Price'];

  id = "1";

  rows = []

  ngOnInit(): void {
    this.getfarmerProfileList();

  }

  getfarmerProfileList(){
    this.service.getfarmerProfileList(this.id).subscribe(data =>{
      console.log(JSON.stringify(data));
    //  this.rows = data;
      data.forEach(element => {
        this.rows.push({
          Product:element.ProductName,
          Qty:element.Quantity,
          Price:element.Price,
         
        });
      });

      
    })
    
    }

}
