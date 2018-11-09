import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { JsonService } from '../_services/index';


@Component({
  selector: 'app-produclist',
  templateUrl: './produclist.component.html',
  styleUrls: ['./produclist.component.css']
})
export class ProduclistComponent implements OnInit {

  jsonFamilyProd: any;
  productID: any;

  constructor(
    private router: Router,
    private jsonService: JsonService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    this.productID = this.actRouter.snapshot.params['id'];
    if (this.productID == 1) {
      this.jsonService.getFamilyProdcutJSON()
        .subscribe(fprod => this.jsonFamilyProd = fprod);
    }else if(this.productID == 2){
        this.jsonService.getCoupleProdcutJSON()
                .subscribe(fprod => this.jsonFamilyProd = fprod);
    }else if(this.productID == 3){
        this.jsonService.getSingleProdcutJSON()
        .subscribe(fprod => this.jsonFamilyProd = fprod);
    }


  }




}
