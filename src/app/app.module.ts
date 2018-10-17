import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RoutingPracOneComponent } from './routing-prac-one/routing-prac-one.component';
import { RoutingPracTwoComponent } from './routing-prac-two/routing-prac-two.component';
import { RoutingPracThreeComponent } from './routing-prac-three/routing-prac-three.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingPracOneComponent,
    RoutingPracTwoComponent,
    RoutingPracThreeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
