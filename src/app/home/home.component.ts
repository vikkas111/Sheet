import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggedUsedData: any;
  constructor() {
  }
  ngOnInit() {
  }

}
