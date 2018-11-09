import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { JsonService } from '../_services/index';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  jsondestProd: any;
  constructor(
    private router: Router,
    private jsonService: JsonService, private actRouter: ActivatedRoute) { }

  ngOnInit() {

    this.jsonService.getAllCountJSON()
        .subscribe(fprod => this.jsondestProd = fprod);
  }

}
