import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.component.html',
  styleUrls: ['./farmer-profile.component.css']
})
export class FarmerProfileComponent implements OnInit {

  constructor(private service:SharedService,private router: Router,    private route: ActivatedRoute) { }


  headers = ['Product','Qty','Price'];

  id = sessionStorage.getItem("farmerId");
  
  quantity:"";
  price:"";
  productName:"";
  isValid = true;

  rows = []

  ngOnInit(): void {
    this.getfarmerProfileList();
    if(this.route.snapshot.queryParamMap.get('id'))
    this.id = this.route.snapshot.queryParamMap.get('id')
    console.log(this.route.snapshot.queryParamMap.get('id'));
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

    formValidation() {
      if (this.productName === '' || this.productName === undefined) {
        Swal.fire({
          icon: 'error',
          text: 'Please enter a Name',
          toast: true,
          position: 'bottom-right',
        });
        this.isValid = false;
      } else if (this.price === '' || this.price === undefined) {
        Swal.fire({
          icon: 'error',
          text: 'Please enter a price',
          toast: true,
          position: 'bottom-right',
        });
        this.isValid = false;
      } 
      else if (this.quantity === '' || this.quantity === undefined) {
        Swal.fire({
          icon: 'error',
          text: 'Please enter a quantity',
          toast: true,
          position: 'bottom-right',
        });
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    }
    clickFunction(){
      // ('" + id + @"','" + farmer.ProductName + @"','" + farmer.Price + @"','" + farmer.Quantity +@"')";
      this.formValidation();

      if (this.isValid == true) {
      let farmer = {ProductName : this.productName,Price:this.price,Quantity:this.quantity}
      console.log(farmer);
      this.service.farmerAddProducts(farmer,this.id).subscribe(data =>{
        console.log(JSON.stringify(data));
        this.rows = []
        this.getfarmerProfileList();
      //  this.rows = data;
      })
    }
    }

}
