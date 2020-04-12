import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { IframeComponent } from './iframe/iframe.component';


const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' },
  { path: 'angular', component: AngularComponent },
  { path: '**', component: IframeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
