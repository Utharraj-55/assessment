import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './component/delete/delete.component';
import { PostComponent } from './component/post/post.component';
import { UpdateComponent } from './component/update/update.component';
import { SharedModule } from './shared.module';

const routes: Routes = [
  {
    path: 'post', component: PostComponent},
    {path:'delete',component:DeleteComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
