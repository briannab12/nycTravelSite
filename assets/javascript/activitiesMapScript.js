var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* LOCATIONS */
    var loc1 = {
        info: '<strong>Bronx Zoo</strong><br>\
					2300 Southern Boulevard Bronx<br>\
                   New York 10460<br>',
        lat: 40.850583,
        long: -73.877004
    };

    var loc2 = {
        info: "<strong>Coney Island</strong><br>\
					Brooklyn, NY<br>",
        lat: 40.575787,
        long: -73.970966
    };

    var loc3 = {
        info: '<strong>Circle Line</strong><br>\
					Pier 83, W 42nd St<br>\
                    New York, NY 10036<br>',
        lat: 40.762832,
        long: -74.001665
    };

    var loc4 = {
        info: '<strong>The New York Pass</strong><br>\
					Bar Building, 36 W 44th St #1407<br>\
                    New York, NY 10036<br>',
        lat: 40.755332,
        long: -73.981910
    };

    var loc5 = {
        info: '<strong>New York Helicopter Inc</strong><br>\
					6 E River Bikeway<br>\
                    New York, NY 10004<br>',
        lat: 40.701509,
        long: -74.009139
    };

    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "activities.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "activities.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "activities.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "activities.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "activities.html#anc5"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.741541,
            lng: -73.988175
        },
        zoom: 10,
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