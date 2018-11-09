import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { JsonService } from '../_services/index';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }
}
//const prom = new Promise((resolve, reject) => {

//}).then((resolve,reject))
