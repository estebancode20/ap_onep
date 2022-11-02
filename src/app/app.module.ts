import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


/* Importamos el HttpClientModule */
import {HttpClientModule} from '@angular/common/http';


/*importamos Proveedor1Provider*/
import {Proveedor1Provider} from '../providers/proveedor1/proveedor1';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Proveedor1Provider],
  bootstrap: [AppComponent],
})
export class AppModule {}
