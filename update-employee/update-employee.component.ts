import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
id!:number;
  employee: Employee=new Employee();
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    }, (error: any) =>console.log(error));
  }
  onSubmit1(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.EmployeeList();
     
    }
    )}
   EmployeeList(){
    this.router.navigate(['/employees']);
 
 
  }
}
 