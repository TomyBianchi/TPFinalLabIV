import { Component } from '@angular/core';
import { MapEventsService } from '../Services/map-events.service';
import { RedireccionUrlPantallaFiltrosService } from '../Services/redireccion-url-pantalla-filtros.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  constructor(private mapEventsService: MapEventsService, private redireccionUrlPantallaFiltrosService: RedireccionUrlPantallaFiltrosService) {}


  

  onMapClick(event: MouseEvent) {
    // Obtén las coordenadas del clic
    const x = event.clientX;
    const y = event.clientY;
  
    // Obtén el elemento SVG en las coordenadas del clic
    const clickedElement = document.elementFromPoint(x, y);
  
    // Comprueba si el elemento es un <path> (área del país)
    if (clickedElement instanceof SVGPathElement) {
      // Obtén el ID del país desde el atributo "id"
      const country = clickedElement.getAttribute('title');

      console.log("PAIS CLICKEADO = " + country);

      const countryId = clickedElement.getAttribute('id');

      if (countryId !== null) { // se verifica que el id del pais no es null
        this.redireccionUrlPantallaFiltrosService.navegarAlUrlFiltros(countryId)
      }

    }
  }


  
  


}
