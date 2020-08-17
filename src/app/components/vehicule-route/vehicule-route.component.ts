import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicule-route',
  templateUrl: './vehicule-route.component.html',
  styleUrls: ['./vehicule-route.component.css']
})

export class VehiculeRouteComponent implements OnInit {

  lat = 33.9716;
  lng = 6.8498;

  public markerOptions = {
    origin: {
        icon: 'https://www.shareicon.net/data/32x32/2016/04/28/756617_face_512x512.png',
        draggable: true,
    },
    destination: {
      icon: 'https://www.shareicon.net/data/32x32/2016/04/28/756626_face_512x512.png',
      // label: 'MARKER LABEL',
      infoWindow: `<h5>En route<h5>`
    },
    waypoints: [
      { icon: 'https://www.shareicon.net/data/32x32/2016/04/28/756626_face_512x512.png' }
    ]
    
  
}

  public renderOptions = {
    suppressMarkers: true,
  }

  origin = { lat: 33.9716, lng: -6.8498 };
  destination = { lat: 35.1744, lng: -6.1474 };
  waypoints = [
     {location: { lat: 34.2541, lng: -5.5890 }},
  ];



  // lat = 30.573109;
  // lng = -6.589843;

  // public locations = [
  //   {lat: 33.573109, lng: -7.589843},
  //   {lat: 33.971588, lng: -6.849813},
  //   {lat: 30.427755, lng: -9.598107},
  //   {lat: 35.759464, lng: -5.833954},
  //   {lat: 31.629473, lng: -7.981084},
  // ]


  
  constructor() { }

  ngOnInit(): void {

    // for(var j = 1; j < 30; j++)
    // {
    //   let rnd1 = Math.random();
    //   let rnd2 = Math.random();

    //     let lat1 = this.lat + 5 * (0.5 - rnd1);
    //     let lng1 = this.lng + 5 * (0.5 - rnd2);
        
    //     this.locations.push({lat: lat1, lng: lng1});

    // }
  }


}
