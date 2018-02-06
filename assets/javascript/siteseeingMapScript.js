var map;

function initMap() {
    // load the mobile menu
    loadMenu();
    /* LOCATIONS */
    var loc1 = {
        info: '<strong>Central Park</strong><br>\
					New York, NY 10024<br>',
        lat: 40.782848,
        long: -73.965361
    };

    var loc2 = {
        info: "<strong>Empire State Building</strong><br>\
					350 5th Ave<br>\
                    New York, NY 10118<br>",
        lat: 40.748454,
        long: -73.985687
    };

    var loc3 = {
        info: '<strong>Statue of Liberty</strong><br>\
					New York, NY 10004<br>',
        lat: 40.689245,
        long: -74.044516
    };

    var loc4 = {
        info: '<strong>Rockefeller Center</strong><br>\
					45 Rockefeller Plaza<br>\
                    New York, NY 10111<br>',
        lat: 40.758761,
        long: -73.978690
    };

    var loc5 = {
        info: '<strong>Grand Central Terminal </strong><br>\
					89 E 42nd St<br>\
                    New York, NY 10017<br>',
        lat: 40.752763,
        long: -73.977224
    };

    var loc6 = {
        info: '<strong>Radio City Music Hall</strong><br>\
					1260 6th Ave<br>\
                   New York, NY 10020<br>',
        lat: 40.759996,
        long: -73.979993
    };

    var loc7 = {
        info: "<strong>Chinatown</strong><br>\
					New York, NY<br>",
        lat: 40.715840,
        long: -73.997535
    };

    var loc8 = {
        info: '<strong>Little Italy</strong><br>\
					New York, NY 10013<br>',
        lat: 40.718960,
        long: -73.998371
    };

    var loc9 = {
        info: '<strong>Madison Square Garden</strong><br>\
					4 Pennsylvania Plaza<br>\
                    New York, NY 10001<br>',
        lat: 40.750533,
        long: -73.993487
    };

    var loc10 = {
        info: '<strong>One World Trade Center</strong><br>\
					285 Fulton St<br>\
                    New York, NY 10007<br>',
        lat: 40.712747,
        long: -74.013385
    };

    var loc11 = {
        info: '<strong>Brooklyn Bridge</strong><br>\
					New York, NY 10038<br>',
        lat: 40.699676,
        long: -73.995694
    };

    var loc12 = {
        info: "<strong>Yankee Stadium</strong><br>\
					1 E 161st St<br>\
                    Bronx, NY 10451<br>",
        lat: 40.829630,
        long: -73.926191
    };

    var loc13 = {
        info: '<strong>Staten Island Ferry</strong><br>\
					4 Whitehall St<br>\
                    New York, NY 10004<br>',
        lat: 40.701026,
        long: -74.013063
    };

    var loc14 = {
        info: '<strong>Time Square</strong><br>\
					Manhattan, NY 10036<br>',
        lat: 40.758907,
        long: -73.985147
    };

    var loc15 = {
        info: '<strong>Chrysler Building</strong><br>\
					405 Lexington Ave<br>\
                    New York, NY 10174<br>',
        lat: 40.751641,
        long: -73.975497
    };


    var locations = [
      [loc1.info, loc1.lat, loc1.long, 0, "siteseeing.html#anc1"],
      [loc2.info, loc2.lat, loc2.long, 1, "siteseeing.html#anc2"],
      [loc3.info, loc3.lat, loc3.long, 2, "siteseeing.html#anc3"],
      [loc4.info, loc4.lat, loc4.long, 3, "siteseeing.html#anc4"],
      [loc5.info, loc5.lat, loc5.long, 4, "siteseeing.html#anc5"],
      [loc6.info, loc6.lat, loc6.long, 5, "siteseeing.html#anc6"],
      [loc7.info, loc7.lat, loc7.long, 6, "siteseeing.html#anc7"],
      [loc8.info, loc8.lat, loc8.long, 7, "siteseeing.html#anc8"],
      [loc9.info, loc9.lat, loc9.long, 8, "siteseeing.html#anc9"],
      [loc10.info, loc10.lat, loc10.long, 9, "siteseeing.html#anc10"],
      [loc11.info, loc11.lat, loc11.long, 10, "siteseeing.html#anc11"],
      [loc12.info, loc12.lat, loc12.long, 11, "siteseeing.html#anc12"],
      [loc13.info, loc13.lat, loc13.long, 12, "siteseeing.html#anc13"],
      [loc14.info, loc14.lat, loc14.long, 13, "siteseeing.html#anc14"],
      [loc15.info, loc15.lat, loc15.long, 14, "siteseeing.html#anc15"],
    ];

    /* CREATE THE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.762863,
            lng: -73.989067
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