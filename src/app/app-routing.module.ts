import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'profile', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
