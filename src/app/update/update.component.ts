import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployesService } from '../employes.service';



export interface DialogData {
  name:any;
  last:any;
  email:any;
  phone:any;
  salary:any;
id:any

}


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private api:EmployesService) {}
   

}
