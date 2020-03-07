import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
      // The path name is what will be in the URL
        { 
            path: '', 
            component: SearchComponent 
        },
        {
            path: 'details/:id',
            component: DetailsComponent,
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
