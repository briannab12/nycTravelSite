var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* LOCATIONS */
    var loc1 = {
        info: '<strong>Airbnb</strong><br>\
					Apartment<br>\
                   Near Union Square<br>',
        lat: 40.733355,
        long: -73.987944
    };

    var loc2 = {
        info: "<strong>The NoMad Hotel</strong><br>\
					1170 Broadway<br>\
                    New York 10001<br>",
        lat: 40.744959,
        long: -73.988558
    };

    var loc3 = {
        info: '<strong>The New York EDITION</strong><br>\
					5 Madison Ave<br>\
                    New York, NY 10010<br>',
        lat: 40.741387,
        long: -73.987488
    };

    var loc4 = {
        info: '<strong>The Ludlow</strong><br>\
					180 Ludlow St <br>\
                    New York 10002<br>',
        lat: 40.721830,
        long: -73.987348
    };

    var loc5 = {
        info: '<strong>The Standard East Village</strong><br>\
					25 Cooper Sq<br>\
                    New York 10003<br>',
        lat: 40.727957,
        long: -73.990812
    };

    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "lodging.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "lodging.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "lodging.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "lodging.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "lodging.html#anc5"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.733355,
            lng: -73.987944
        },
        zoom: 13,
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