import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from '../art/art.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full' },
    { path: 'art', component: ArtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
