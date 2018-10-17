import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RoutingPracOneComponent } from './routing-prac-one/routing-prac-one.component';
import { RoutingPracTwoComponent } from './routing-prac-two/routing-prac-two.component';
import { RoutingPracThreeComponent } from './routing-prac-three/routing-prac-three.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test1', component: RoutingPracOneComponent },
  { path: 'test2', component: RoutingPracTwoComponent },
  { path: 'test3', component: RoutingPracThreeComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
