import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from '../art/art.component';
import { HomeComponent } from '../home/home.component';
import { AnimationsComponent } from '../animations/animations.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'art', component: ArtComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'about', component: AnimationsComponent },
    { path: 'contact', component: AnimationsComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
