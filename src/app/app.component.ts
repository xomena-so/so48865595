import { Component, OnInit } from '@angular/core';
import { MyMarker } from './marker';
import { MarkersService } from './markers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AGM project (so48865595)';
  lat = 41.399115;
  lng = 2.160962;
  markers: MyMarker[];

  constructor(private markersService: MarkersService) { }

  ngOnInit() {
    this.getMarkers();
  }

  getMarkers(): void {
    this.markers = this.markersService.getMarkers();
  }
}
