import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
      // The path name is what will be in the URL
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data : {what : 'hi'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
