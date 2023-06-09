import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post('http://localhost:3000/employee/',data)
    console.log(data);
    
  }
getData()
{
  return this.http.get('http://localhost:3000/employee')
}
deletedata(id:any)
{
  return this.http.delete('http://localhost:3000/employee/'+id)
}
update(employeeid:any)
{
  return this.http.put('http://localhost:3000/employee',employeeid)
}
}
