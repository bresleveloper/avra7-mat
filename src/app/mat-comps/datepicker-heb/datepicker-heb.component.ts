import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-heb',
  templateUrl: './datepicker-heb.component.html',
  styleUrls: ['./datepicker-heb.component.css']
})
export class DatepickerHebComponent implements OnInit {


  minDate:Date = new Date()
  maxDate:Date = new Date()


  constructor() { 
    this.minDate.setDate(10)
    this.minDate.setMonth(-2)
    this.maxDate.setDate(20)
    this.maxDate.setMonth(14)

  }

  logOutput(ev, typeStr){
    console.log(typeStr, ev, ev.value);
    
  }

  @ViewChild('pickerOfMoo') pickerOfMoo:MatDatepicker<Date>
  openBYclick(){
    console.log('openBYclick' , this.pickerOfMoo.opened);
    if (!this.pickerOfMoo.opened) {
      this.pickerOfMoo.open()
    }
  }

  ngOnInit(): void {
  }

}
