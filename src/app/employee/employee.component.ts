import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';
import { Category } from '../category';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  EmployeeList:Employee[]=[];
  FilteredEmployeeList:Employee[]=[];
  SelectedUnvan:number=0;
  SelectedFakulte:number=0;
  SelectedBolum:number=0;
  NewEmployee:Employee=new Employee();
  EditEmployee:Employee=new Employee();
UnvanList:Category[]=[];
FakulteList:Category[]=[];
BolumList:Category[]=[];

  constructor(private employeeservice:EmployeeService){}
  ngOnInit()
  {
    this.Getall();
    this.GetAllCategories();
  }

  FilterEmployees()
  {
    if(this.SelectedBolum==0||this.SelectedFakulte==0||this.SelectedUnvan==0)
    {
      this.FilteredEmployeeList=this.EmployeeList;
      return
    }
    this.FilteredEmployeeList=this.EmployeeList.filter(e=>
      e.unvan==this.SelectedUnvan
      && e.bolum==this.SelectedBolum
      && e.fakulte==this.SelectedFakulte);
  }
  ClearFilter()
  {
    this.SelectedUnvan=0;
  this.SelectedFakulte=0;
  this.SelectedBolum=0;
  this.FilterEmployees();
  }
GetAllCategories()
{
this.employeeservice.GetCategories().subscribe(
  (Response)=>{
    this.UnvanList=Response.filter(item=>item.type==0);
    this.FakulteList=Response.filter(item=>item.type==1);
    this.BolumList=Response.filter(item=>item.type==2);
  }
)
}

  Getall()
  {
    this.employeeservice.GetEmployee().subscribe(
      (Response)=>{
        this.EmployeeList=Response;
        console.log(this.EmployeeList);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  
  SaveEmployee(){
    
    this.employeeservice.postEmployee(this.NewEmployee).subscribe(
      (response)=>{
        this.Getall();
        // this.NewEmployee.adSoyad="";
        // this.NewEmployee.address="";
        // this.NewEmployee.phoneNumber="";

      }
    )
  }
  
  EditClick(employee:Employee)
  {
    //alert(Student.name)
    this.EditEmployee=employee;
  }
  UpdateClick()
  {
    alert(this.EditEmployee.adSoyad)
    this.employeeservice.updateEmployee(this.EditEmployee).subscribe(
      (response)=>{
        this.Getall();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  deleteclick(id:number)
  {
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        this.employeeservice.DeleteEmployee(id).subscribe(
      
          (response)=>{
            
         
          this.Getall();
        }
        )
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
      }  
    })  
   
  }

}
