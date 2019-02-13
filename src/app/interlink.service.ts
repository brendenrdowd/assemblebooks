import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { books } from '../assets/volumes.js'

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {
  
  constructor(private http: HttpClient) { }

  getA(cb){
    let regex = new RegExp(/^[a-mA-M]/)
    let set = books.filter(function(book){
      return regex.exec(book.volumeInfo.title[0])
    })
    set = set.sort((a,b) => (a.volumeInfo.title > b.volumeInfo.title) ? 1 : -1)
    console.log(set)
    cb(set)
  }

  getB(cb){
    let regex = new RegExp(/^[n-zN-Z]/)
    let set = books.filter(function(book){
      return regex.exec(book.volumeInfo.title[0])
    })
    set = set.sort((a,b) => (a.volumeInfo.title > b.volumeInfo.title) ? 1 : -1)
    console.log(set)
    cb(set)
  }
}
