function initMap() {
  var location = {lat: 46.524297339046726, lng: 6.633018642329806};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: location,
    styles: [
      {
        "stylers": [
          {
            "radius": "30px"
          }
        ]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Маркер',
    icon: './icons/burger_location.png'
  });
}
