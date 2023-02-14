import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {path:"user",component:UserregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
