var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* CREATE THE MAP */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
            lat: 40.733355,
            lng: -73.987944
        }
    });

    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    
}