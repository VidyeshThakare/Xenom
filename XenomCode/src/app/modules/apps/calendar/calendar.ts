import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-drawer-chat',
  templateUrl: './calendar_component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class DrawerChatComponent implements OnInit {
    Events= []

    calendarOptions !:CalendarOptions

    onDateClick(res:{dateStr:string}){
        alert('You Clicked on:' +res.dateStr)
    }

  constructor() {}

  ngOnInit(): void {
    setTimeout(() =>{
        this.calendarOptions ={
            initialView: 'dayGridMonth',
            dateClick:this.onDateClick.bind(this),
            events:this.Events
        }
    },3500)
  }
}
