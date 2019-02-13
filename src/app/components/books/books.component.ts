import { Component, OnInit } from '@angular/core';
import { InterlinkService } from 'src/app/interlink.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  firstSet: object[]
  setA: object[]
  secondSet: object[]
  setB: object[]
  constructor(private Interlink: InterlinkService) {
    this.Interlink.getA((res)=>{
      console.log("res:",res)
      this.firstSet = res.slice(0,6)
      this.setA = res;
    })
    this.Interlink.getB((res)=>{
      console.log("res:",res)
      this.secondSet = res.slice(0,6)
      this.setB = res;
    })
  }

  moreA(){
    this.firstSet = this.setA;
  }

  moreB(){
    this.secondSet = this.setB;
  }

  ngOnInit() {


  }

}
