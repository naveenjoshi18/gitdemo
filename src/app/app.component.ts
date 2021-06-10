import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Demo of PWA';
  vehicle:any;

  constructor(private data:DataService){ }

  ngOnInit(){
    this.data.Vehicle().subscribe(data =>{
     this.vehicle = data;
    //console.log(data)
    })
    
  }


}
