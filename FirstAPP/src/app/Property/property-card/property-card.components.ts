import { Component, Input } from "@angular/core";

@Component({
  selector:'app-property-card',
 // template:'<h1>I am Vemannn <h1>'
 templateUrl:'property-card.component.html',
 styleUrls:['propert-card.components.css']
})
export class PropertyCardComponent{
  @Input() property :any
// Property: any={
//   "id":1,
//   "name":"Duplex",
//   "type":"House",
//   "price":1200000

// }
}
