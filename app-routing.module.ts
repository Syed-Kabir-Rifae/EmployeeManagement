import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'login', component:LoginPageComponent},
  {path: 'createEmployee',component:CreateEmployeeComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent},
  {path:'delete',component:DeleteEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
