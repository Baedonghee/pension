import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  title: string = 'Hi';
  lat: number = 37.652411;
  lng: number = 128.787793;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
  }

}