var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* LOCATIONS */
    var loc1 = {
        info: '<strong>Buenos Aires</strong><br>\
					513 E 6th St<br>\
                   New York, NY 10009<br>',
        lat: 40.725220,
        long: -73.983147
    };

    var loc2 = {
        info: "<strong>Dun-Well Doughnuts</strong><br>\
					222 Montrose Avenue<br>\
                    Brooklyn, NY 11206<br>",
        lat: 40.707372,
        long: -73.940263
    };

    var loc3 = {
        info: '<strong>Momofuku Milk Bar</strong><br>\
					382 Metropolitan Avenue<br>\
                    Brooklyn, NY 11211<br>',
        lat: 40.714012,
        long: -73.955383
    };

    var loc4 = {
        info: '<strong>Ovenly</strong><br>\
					31 Greenpoint Avenue<br>\
                    Brooklyn, NY 11222<br>',
        lat: 40.729868,
        long: -73.959575
    };

    var loc5 = {
        info: '<strong>Marthas Country Bakery</strong><br>\
					70-30 Austin Street<br>\
                    Flushing, NY 11375<br>',
        lat: 40.720332,
        long: -73.845950
    };

    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "dessert.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "dessert.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "dessert.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "dessert.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "dessert.html#anc5"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.719513,
            lng: -73.914120
        },
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    /* DRAW THE MARKERS ON MAP */
    var locationData = new google.maps.InfoWindow({});
    var marker;
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < locations.length; i++) {
        var num = i + 1;
        num = num.toString();
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            label: num,
            map: map,
            url: locations[i][4]
        });

        /* IF THEY CLICK A MARKER, SCROLL TO THE INFORMATION ON THE LOCATION AND HIGHLIGHT IT */
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                window.location.href = locations[i][4];
                for (var n = 0; n < locations.length; n++) {
                    boxes[n + 1].style["boxShadow"] = "0px 0px 0px 0px black";
                }
                boxes[i + 1].style["boxShadow"] = "rgb(237, 196, 68) 0px 9px 0px 0px, rgb(237, 196, 68) 0px -9px 0px 0px";
            }
        })(marker, i));
        /* IF THEY HOVER ON A MARKER, SHOW THE NAME AND ADDRESS OF THAT LOCATION */
        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            return function () {
                locationData.setContent(locations[i][0]);
                locationData.open(map, marker);
            }
        })(marker, i));
        /* WHEN THEY STOP HOVERING ON A MARKER, HIDE THE INFORMATION */
        google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
            return function () {
                locationData.close(map, marker);
            }
        })(marker, i));
    }
}