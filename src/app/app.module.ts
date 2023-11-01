import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { MapaComponent } from './mapa/mapa.component';
import { LlamadaPantallaFiltrosComponent } from './llamada-pantalla-filtros/llamada-pantalla-filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideLeftComponent,
    MapaComponent,
    LlamadaPantallaFiltrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
