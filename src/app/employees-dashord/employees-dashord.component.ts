import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { EmployesService } from '../employes.service';
import { UpdateComponent } from '../update/update.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-employees-dashord',
  templateUrl: './employees-dashord.component.html',
  styleUrls: ['./employees-dashord.component.css']
})
export class EmployeesDashordComponent implements OnInit{



employee:any
constructor(private http:EmployesService,public dialog: MatDialog){}
  
  ngOnInit(): void {
      this.http.getData().subscribe(res =>
        {

          this.employee=res
        })
  }




fromValue = new FormGroup({
    name:new FormControl(''),
    last:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    salary:new FormControl('')
   })

addEmployee(){
this.http.postData(this.fromValue.value).subscribe(res=>{

})
}
deletedata(id :any)
{
this.http.deletedata(id).subscribe(res =>
  {})
}
View(data3:any)
{
  this.dialog.open(ViewComponent, {
    data: {
      name:data3.name,
      last:data3.last,
      email:data3.email,
      phone:data3.phone,
      salary:data3.salary
},
  });

}
Update(data4 :any)
{
  this.dialog.open(UpdateComponent, {
    data: {
      id:data4.id
},
  });
}


}

