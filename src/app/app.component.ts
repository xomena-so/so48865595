import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MyMarker } from './marker';
import { MarkersService } from './markers.service';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';

declare var google: any;

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'AGM project (so48865595)';
  lat = 41.399115;
  lng = 2.160962;
  markers: MyMarker[];

  @ViewChild('AgmMap') agmMap: AgmMap;

  constructor(private markersService: MarkersService) { }

  ngOnInit() {
    this.getMarkers();
  }

  ngAfterViewInit() {
    console.log(this.agmMap);
    this.agmMap.mapReady.subscribe(map => {
      const bounds: LatLngBounds = new google.maps.LatLngBounds();
      for (const mm of this.markers) {
        bounds.extend(new google.maps.LatLng(mm.lat, mm.lng));
      }
      map.fitBounds(bounds);
    });
  }

  getMarkers(): void {
    this.markers = this.markersService.getMarkers();
  }

  mapIdle() {
    console.log('idle');
  }
}
