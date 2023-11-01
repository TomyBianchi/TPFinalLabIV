import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { LlamadaPantallaFiltrosComponent } from './llamada-pantalla-filtros/llamada-pantalla-filtros.component';

const routes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'pais/:id', component: LlamadaPantallaFiltrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
