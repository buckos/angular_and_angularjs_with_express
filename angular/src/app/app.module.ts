import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { AngularComponent } from './angular/angular.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { APP_BASE_HREF } from '@angular/common';
import { IframeComponent } from './iframe/iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    MenuComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    // In Angular 1.6 hash based routing now has #! for google ajax crawlers, we should match in Angular
    // https://docs.angularjs.org/guide/migration#commit-aa077e8
    { provide: APP_BASE_HREF, useValue: '!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
