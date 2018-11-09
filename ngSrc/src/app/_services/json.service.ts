import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JsonService{

    constructor(private http: Http) {
         var obj;
         this.getFamilyProdcutJSON().subscribe(data => obj=data, error => console.log(error));
         this.getCoupleProdcutJSON().subscribe(data => obj=data, error => console.log(error));
         this.getSingleProdcutJSON().subscribe(data => obj=data, error => console.log(error));
    }

   public getFamilyProdcutJSON(): Observable<any> {
         return this.http.get("../../assets/json/familyproduct.json")
                         .map((res:any) => res.json());

     }

     public getCoupleProdcutJSON(): Observable<any> {
         return this.http.get("../../assets/json/couplesProduct.json")
                         .map((res:any) => res.json());

     }

     public getSingleProdcutJSON(): Observable<any> {
         return this.http.get("../../assets/json/singleProduct.json")
                         .map((res:any) => res.json());

     }

     public getAllCountJSON(): Observable<any> {
         return this.http.get("../../assets/json/countries.json")
                         .map((res:any) => res.json());

     }
}