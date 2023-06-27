import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

@Output() cp=new EventEmitter();

@Input() par=""
objec=


{


name:"Home",
place:"vskp",
age:20


}


objj=


[{


"name":"jHome",
"place":"jvskp",
"age":20


}]








ic=[1,2 ,3,4,5,6]

  c=2
required=false;


pb="this is pb"

binding=" "


// ob=

// {

// color:"red",
// background:"pink"





// }



even(){
  alert("this is working...")
}






  ngOnInit(): void {
  }



func()
{
this.cp.emit("this is from to child to parent");


}



}


