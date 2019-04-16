import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormDetailComponent } from './form-detail/form-detail.component';

const routes: Routes = [
  {path:'forms',component: FormComponent},
  {path:'',redirectTo:'forms',pathMatch:'full'},
  {path:'forms/:formName',component: FormDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
