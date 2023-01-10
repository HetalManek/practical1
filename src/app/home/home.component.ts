import { Component, OnInit } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public styleservice:StylingService) { }

  ngOnInit(): void {
  }
 
}
