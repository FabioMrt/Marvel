import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://gateway.marvel.com/v1/public/';
  apiKey = 'e12789c21a7db40c9675599eefc7b06d';
  hash = '0ce669e2ffed3378ad10740d5ed19038'
  ts = 1

  comics() {
    var url = `${this.baseUrl}comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.httpClient.get<any>(url)
  }

  characters() {
    var url = `${this.baseUrl}characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.httpClient.get<any>(url)
  }

  stories() {
    var url = `${this.baseUrl}stories?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.httpClient.get<any>(url)
  }

  charactersById(id) {
    var url = `${this.baseUrl}characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.httpClient.get<any>(url)
  }

  events() {
    var url = `${this.baseUrl}events?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.httpClient.get<any>(url)
  }

  series() {
    var url = `${this.baseUrl}series?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.httpClient.get<any>(url)
  }

 
}
