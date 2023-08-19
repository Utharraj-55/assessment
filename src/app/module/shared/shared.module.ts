import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PostComponent } from './component/post/post.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';
import {  FormsModule,ReactiveFormsModule}from '@angular/forms'


@NgModule({
  declarations: [
    PostComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    PostComponent,
    UpdateComponent,
    DeleteComponent
  ]
})
export class SharedModule { }
