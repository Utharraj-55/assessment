import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder}from '@angular/forms'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private fb:FormBuilder,private  postscrvice:ApiService){}
  employee!:any
  employeeForm = this.fb.group({
    id:['']
  });
  ngOnInit(): void {
    this.getpost()
  }
  getpost(){
    this.postscrvice.getfunction().subscribe((res) => {
      this.employee = res;
    });
  }
  Delete(){
    var id=this.employeeForm.get('id')?.value
    var mythis=this
    this.postscrvice.deletefuction(id).subscribe(res =>{
      console.log(res)
      mythis.getpost()
    })
  }

  
}
