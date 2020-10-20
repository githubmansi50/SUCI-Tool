import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucidecryptComponent } from "./sucidecrypt/sucidecrypt.component";
import { SuciencryptComponent } from "./suciencrypt/suciencrypt.component";
const routes: Routes = [
 
  {
    path: 'sucidecrypt',
    component: SucidecryptComponent
  },
  {
    path: 'suciencrypt',
    component: SuciencryptComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: '/sucidecrypt',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/suciencrypt',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
