var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* LOCATIONS */
    var loc1 = {
        info: '<strong>Museum of Natural History</strong><br>\
					Central Park West at 79th Street<br>\
                   New York, NY 10024<br>',
        lat: 40.781318,
        long: -73.973999
    };

    var loc2 = {
        info: "<strong>Metropolitan Museum of Art</strong><br>\
					1000 5th Ave<br>\
                    New York, NY 10028<br>",
        lat: 40.779437,
        long: -73.963251
    };

    var loc3 = {
        info: '<strong>Museum of Sex</strong><br>\
					233 5th Ave<br>\
                    New York, NY 10016<br>',
        lat: 40.744102,
        long: -73.987406
    };

    var loc4 = {
        info: '<strong>The Museum of Modern Art (MoMA)</strong><br>\
					11 W 53rd St<br>\
                    New York, NY 10019<br>',
        lat: 40.761429,
        long: -73.977638
    };

    var loc5 = {
        info: '<strong>Intrepid Sea, Air and Space Museum</strong><br>\
					Pier 86, W 46th St & 12th Ave<br>\
                    New York, NY 10036<br>',
        lat: 40.764547,
        long: -73.999613
    };

    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "museums.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "museums.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "museums.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "museums.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "museums.html#anc5"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.761429,
            lng: -73.977638
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