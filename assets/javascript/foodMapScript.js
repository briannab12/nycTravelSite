var map;

function initMap() {
    // load the mobile menu
    loadMenu();

    /* LOCATIONS */
    var loc1 = {
        info: '<strong>Shake Shack</strong><br>\
					11 Madison Avenue # 1<br>\
                   New York, NY 10010<br>',
        lat: 40.741518,
        long: -73.988163
    };

    var loc2 = {
        info: "<strong>Roberta's</strong><br>\
					261 Moore Street<br>\
                    Brooklyn, NY 11206<br>",
        lat: 40.705070,
        long: -73.933602
    };

    var loc3 = {
        info: '<strong>Red Rooster</strong><br>\
					310 Malcolm X Boulevard<br>\
                    New York, NY 10027<br>',
        lat: 40.808109,
        long: -73.944769
    };

    var loc4 = {
        info: '<strong>Smorgasburg</strong><br>\
					90 Kent Ave<br>\
                    Brooklyn, NY 11211<br>',
        lat: 40.721494,
        long: -73.962122
    };

    var loc5 = {
        info: '<strong>Peter Luger Steak House</strong><br>\
					178 Broadway<br>\
                    Brooklyn, NY 11211<br>',
        lat: 40.709839,
        long: -73.962494
    };

    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "food.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "food.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "food.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "food.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "food.html#anc5"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.741541,
            lng: -73.988175
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