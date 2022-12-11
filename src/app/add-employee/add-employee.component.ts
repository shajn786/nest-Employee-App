import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  empname=""
  designation=""
  salary=""
  department=""
  mobno=""
  username=""
  password=""
  confirmpassword=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any ={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"department":this.department,
  "mobno":this.mobno,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  this.api.addEmployee(data).subscribe(


    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("added successfully")
        this.empcode=""
        this.empname=""
        this.designation=""
        this.salary=""
        this.department=""
        this.mobno=""
        this.username=""
        this.password=""
        this.confirmpassword=""
      }
      else{
        alert("not added")
      }
    }


  )
  }

}
