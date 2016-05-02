var $ = jQuery.noConflict();

(function($) {
    "use strict";

    /*-------------------------------------------------*/
    /* =  Contact Map
    /*-------------------------------------------------*/

    var contact = {"lat":"41.9099856", "lon":"12.3955719"}; //Change a map coordinate here!

        var map;
        var MY_MAPTYPE_ID = 'custom_style';
        function initialize() {
            var featureOpts = [
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f3f3f3"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#87c6bd"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 700
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#222222"
                        }
                    ]
                }
            ];
            
            var myLatlng = new google.maps.LatLng(contact.lat, contact.lon);
            var mapOptions = {
                zoom: 16,
                center: myLatlng,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeId: MY_MAPTYPE_ID,
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false
            }
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var styledMapOptions = {
                name: 'Custom Style'
            };
            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
            map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: new google.maps.MarkerImage('assets/img/pin.svg',null, null, null, new google.maps.Size(64,64)),
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    
})(jQuery);