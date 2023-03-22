function initMap() {

        


    var location = {lat: 46.524297339046726, lng: 6.633018642329806}; // Координаты маркера
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17, // Масштаб карты
      center: location // Центр карты
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Маркер',
      icon: './icons/burger_location.png'
    });
    
}