function initMap() {
    // Координаты места, где будет находиться маркер
    var myLatLng = {lat: 46.5241497, lng: 6.6330401};
  
    // Опции карты
    var mapOptions = {
      zoom: 12,
      center: myLatLng
    };
  
    // Создание карты
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Создание маркера
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Место на карте',
      icon: '../icons/mini_favi_burger.png' // путь к вашему изображению маркера
    });
  }
  
  // Запуск функции после загрузки страницы
  google.maps.event.addDomListener(window, 'load', initMap);
  
  