var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* VARIABLES FOR LOCATION DATA */
    var loc1 = {
        info: '<strong>Franklin Park</strong><br>\
					618 St Johns Pl<br>\
                   Brooklyn, NY 11238<br>',
        lat: 40.672294,
        long: -73.957823
    };

    var loc2 = {
        info: "<strong>Brooklyn Brewery</strong><br>\
					79 N 11th St<br>\
                    Brooklyn, NY 11249<br>",
        lat: 40.721730,
        long: -73.957170
    };

    var loc3 = {
        info: '<strong>Comedy Cellar</strong><br>\
					117 Macdougal St<br>\
                    New York, NY 10012<br>',
        lat: 40.730218,
        long: -74.000586
    };

    var loc4 = {
        info: '<strong>Output</strong><br>\
					74 Wythe Avenue<br>\
                    Brooklyn, NY 11249<br>',
        lat: 40.722311,
        long: -73.957844
    };

    var loc5 = {
        info: '<strong>The Cobra Club</strong><br>\
					6 Wyckoff Ave<br>\
                    Brooklyn, NY 11237<br>',
        lat: 40.706697,
        long: -73.923510
    };

    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "drinks.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "drinks.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "drinks.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "drinks.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "drinks.html#anc5"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.700939,
            lng: -73.960163
        },
        zoom: 12,
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