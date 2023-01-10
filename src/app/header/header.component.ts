import { Component, OnInit } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private styleservice:StylingService) { }

  ngOnInit(): void {
  }
  makeDivBlue(){
    this.styleservice.changeDivColor({ 'background-color': 'blue'})
  }

  makeDivRed(){
    this.styleservice.changeDivColor({ 'background-color': 'red'})
  }
  makeDivBlack(){
    this.styleservice.changeDivColor({ 'background-color': 'black'})

  }
}
