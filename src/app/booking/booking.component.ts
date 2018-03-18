import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {


  constructor() {
   }

   onSubmit(form:NgForm){
    debugger;
  }
}
