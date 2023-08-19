import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  employees!:any
constructor(private postservice:ApiService,private fb :FormBuilder){

}
ngOnInit(): void {
  this.getpost
}
getpost(){
  this.postservice.getfunction().subscribe((res) => {
    this.employees = res;
  });
}
employeeForm = this.fb.group({
  id: [''],
  name: [''],
  email: [''],
  password: [''],
});
update(){
 var data= this.employeeForm.value
 var mythis=this
 var id=this.employeeForm.get('id')?.value
 this.postservice.putfunction(id,data).subscribe(res =>{
  this.employees=res
  console.log(res)
  mythis.getpost()
 })
}
}
