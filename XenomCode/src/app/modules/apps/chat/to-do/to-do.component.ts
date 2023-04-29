import { isNgContent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  list:any[]=[];

  addTask(item:string){
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list)
  }

  ngOnInit(): void {
  }

}
