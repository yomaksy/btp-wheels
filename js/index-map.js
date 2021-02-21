function initMap() {
  const boutiqueLatLng = {lat: 48.42893141646616, lng: 35.03940286217705};
  const boutiqueMap = new google.maps.Map(document.getElementById('boutique-map'), {
    disableDefaultUI: true,
    zoom: 16,
    center: boutiqueLatLng,
    styles: [
        {
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": 50
                },
                {
                    "gamma": 0
                },
                {
                    "hue": "#50a5d1"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#333333"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                {
                    "weight": 0.5
                },
                {
                    "color": "#333333"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "gamma": 1
                },
                {
                    "saturation": 50
                }
            ]
        }
    ],
  });
  const svgMarker = {
    path: 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
    fillColor: 'black',
    fillOpacity: 1,
    scale: 2,
    anchor: new google.maps.Point(5, 18),
  };
  const customMarker = new google.maps.Marker({
    position: boutiqueLatLng,
    icon: svgMarker,
    map: boutiqueMap,
    title: "We are Here",
  });
  const info = new google.maps.InfoWindow({
    content: '<h6>BTP Wheels</h6><p>105b Haharina Ave, Dnipro</p>'
  });
  customMarker.addListener('click', function() {
    info.open(boutiqueMap, customMarker);
  });
}