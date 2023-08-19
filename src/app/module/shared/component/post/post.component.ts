import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  employees!:any
constructor(private postser:ApiService,private fb:FormBuilder){

}
ngOnInit(): void {
  this.getpost
}
getpost(){
  this.postser.getfunction().subscribe((res) => {
    this.employees = res;
  });
}
employeeForm = this.fb.group({
  id: [''],
  name: [''],
  email: [''],
  password: [''],
});
submit(){
 var data= this.employeeForm.value
 var mythis=this
 this.postser.postfunction(data).subscribe(res =>{
  this.employees=res
  console.log(res)
  mythis.getpost()
 })
}

}
 