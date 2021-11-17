import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-resort-item',
  templateUrl: './resort-item.component.html',
  styleUrls: ['./resort-item.component.css']
})
export class ResortItemComponent implements OnInit 
{

  @Input() title:string="";
  @Input() price:number=0;
  @Input() imageName:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
