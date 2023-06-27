import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SerService } from 'src/app/services/ser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private pp:SerService) { }

ppp=[];
  
  ngOnInit(): void {


    this.pp.getEmploy().subscribe((res:any) =>this.ppp=res);
  }

}
