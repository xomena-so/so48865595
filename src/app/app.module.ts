import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper} from '@agm/core';

import { AppComponent } from './app.component';
import { MarkersService } from './markers.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdRjEKrzYALbcgy8UqardJa0n54Lml3XU'
    })
  ],
  providers: [
    MarkersService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
