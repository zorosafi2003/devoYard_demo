function loadMap(event) {
    debugger;
    var locations = []

    event.forEach((item, index) => {
        locations.push([item.contactUsTitle, item.mapCard.latitude, item.mapCard.longitude])
    });



    /*=====USER LOCATION=================
    var getUserLocation = function () {
        console.log("getting location");
        //check if the geolocation object is supported, if so get position
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocation);
        } else {
            document.getElementById("locationData").innerHTML = "Sorry - your browser doesn't support geolocation!";
        }
    };
    
    
    var displayLocation = function (position) {
    
        //build text string including co-ordinate data passed in parameter
        var displayText = "User latitude is " + position.coords.latitude + " and longitude is " + position.coords.longitude;
    
        //display the string for demonstration
        document.getElementById("locationData").innerHTML = displayText;
    };*/

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        // center: new google.maps.LatLng(-33.92, 151.25),
        center: new google.maps.LatLng(36.8857, -76.2599),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0], locations[i][6]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    var map;
    var marker;
    //var infowindowPhoto = new google.maps.InfoWindow();
    var latPosition;
    var longPosition;

    function initialize() {

        var mapOptions = {
            zoom: 30,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            // center: new google.maps.LatLng(10,10)
        };

        //  map = new google.maps.Map(document.getElementById("map"), mapOptions);

        initializeMarker();
    }

    function initializeMarker() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                latPosition = event[0].mapCard.latitude
                longPosition = event[0].mapCard.longitude
                var Centerpos = new google.maps.LatLng(latPosition, longPosition);

                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);



                marker = new google.maps.Marker({
                    position: pos,

                    // animation: google.maps.Animation.DROP,
                    map: map,
                    icon: '/assets/images/icon/user-location.png'
                });

                map.setCenter(Centerpos);

            });
        }
    }

    initialize();
}