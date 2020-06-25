import { Component, OnInit } from '@angular/core';
import { SicalcService } from '../sicalc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(public sic:SicalcService) { }

  

  ngOnInit(): void {
  }

}
