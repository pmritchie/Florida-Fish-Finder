let map;
function initMap() {
    var orlando = {lat: 28.538, lng: -81.379};
    var lakeApopka = {lat: 28.623, lng: -81.625}
    var lakeJessup = {lat: 28.730, lng: -81.202}
    var lakeMonroe = {lat: 28.844, lng: -81.262}
    var lakeMonroe = {lat: 28.755, lng: -81.058}


    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: orlando});

    var marker = new google.maps.Marker({position: orlando, map: map});
    var markerTwo = new google.maps.Marker({position: lakeApopka, map: map})
    var markerThree = new google.maps.Marker({position: lakeJessup, map: map})
    var markerFour = new google.maps.Marker({position: lakeMonroe, map: map})
  }