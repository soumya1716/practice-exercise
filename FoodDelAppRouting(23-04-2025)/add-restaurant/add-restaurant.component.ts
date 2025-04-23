import { Component } from '@angular/core';
import { RestInfo, RestInfoNew } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { UserType } from '../user-type';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restDataNew:RestInfoNew[]=[]
  userData:RestInfo={}
  ownerList:UserInfo[]=[]
  frm:FormGroup=new FormGroup({
  restId:new FormControl(''),
  restName:new FormControl(''),
  restLoc:new FormControl(''),
  role:new FormControl(''),
  owner:new FormControl('')
})
constructor(private srv:DataSourceService,private router:Router) 
{
  
}
// ngOnInit():void {
  //this.ownerList=this.srv.GetAllUser().filter((r)=>r.role==UserType.OWNER)
// }
AddRest()
{
  /*let restData:RestInfo={
      restId:this.frm.controls['restId'].value,
      restName:this.frm.controls['restName'].value,
      restLoc:this.frm.controls['restLoc'].value,
      role:this.frm.controls['role'].value,
      owner:this.frm.controls['owner'].value*/
      let restData:RestInfoNew={
        id:this.frm.controls['id'].value,
        name:this.frm.controls['name'].value,
        location:this.frm.controls['location'].value,
        owner:this.frm.controls['owner'].value
      }
console.log(restData) 
// this.srv.AddNewRestEntry(restData)
this.srv.AddNewRestPost(restData).subscribe({
  next:(data)=>
  {
    
  }
})
this.router.navigate(['RestList'])
}
ngOnInit():void {
  this.srv.GetAllUser().subscribe({
    next:(data)=>{
      this.ownerList=data.filter((r)=>(r.role==UserType.OWNER))
    }
  })
  console.log(this.ownerList)
}
GoBackToUserList()
{
  this.router.navigate(['UserList'])
}
}
