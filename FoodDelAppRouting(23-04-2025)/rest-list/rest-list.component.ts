import { Component } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestInfo, RestInfoNew } from '../rest-info';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent {
  restDataNew:RestInfoNew[]=[]
  restData:RestInfo[]=[]
constructor(private srv:DataSourceService,private router:Router,private http:HttpClient)
{

}
ngOnInit():void {
  // this.restData=this.srv.GetRestData()
  //  this.http.get<RestInfoNew[]>('http://localhost:3004/restaurantInfo')
  this.srv.GetRestData()
  .subscribe({
    next:(data)=>{
      this.restDataNew=data
}
})
}
}
