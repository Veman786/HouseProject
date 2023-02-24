import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  propertiess:Array<any>=[{
    "id":1,
    "name":"Duplex",
    "type":"House",
    "price":1200000

  },
  {
  "id":2,
  "name":"villa",
  "type":"House",
  "price":1200000

},
{
"id":3  ,
"name":"Appartment",
"type":"House",
"price":1200000

},
]
  constructor() { }

  ngOnInit(): void {
  }

}
