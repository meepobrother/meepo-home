import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from '../../src/app/app';
import { RouterModule, Routes } from '@angular/router';
let routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home/index'
}];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

