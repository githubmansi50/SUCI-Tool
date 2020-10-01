import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SucidecryptComponent} from "./sucidecrypt/sucidecrypt.component";

const routes: Routes = [
  { path: 'sucidecrypt', component: SucidecryptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
