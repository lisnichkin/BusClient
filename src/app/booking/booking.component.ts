import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

   backgorundImg;

  constructor() {
    this.backgorundImg = 'C:\Users\lisni\Documents\Visual Studio 2017\Projects\BusClient\src\img\bus-background.jpeg';
   }

   onSubmit(form:NgForm){
    debugger;
  }
}
