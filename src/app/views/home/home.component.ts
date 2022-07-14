import { Component, OnInit } from '@angular/core'; 


let oi: string = "";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() { }

  btn() { 
    console.log('arli carai', oi)
    oi = "qualquer coisa"
  }

  ngOnInit(): void {
  }

}
