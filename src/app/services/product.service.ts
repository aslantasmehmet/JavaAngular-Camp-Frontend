import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'  //API'den dosya transferi. React için axios veya fetch kullanılır.  Backenddeki dataya ulaşıyoruz. API'YE çağrı.
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:8050/api/products/getall"
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductResponseModel>{
    return this.httpClient .get<ProductResponseModel>(this.apiUrl)  
   

  }
}
