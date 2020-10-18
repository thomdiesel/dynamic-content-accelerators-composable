'use strict';

(function (exports) {
  var darkStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#343333',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          color: '#454545',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#181818',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1b1b1b',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#454545',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8a8a8a',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#454545',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3c3c3c',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#4e4e4e',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#7e7e7e',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#181919',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3d3d3d',
        },
      ],
    },
  ];

  function initMaps() {
    console.log('doing a map');

    // Get all maps
    var maps = document.querySelectorAll('[data-amp-mapconfiguration]');
    maps.forEach(function (mapdom) {
      // Get the configuration
      var mapConfig = mapdom.getAttribute('data-amp-mapconfiguration');
      var mapConfigObj = JSON.parse(mapConfig);
      console.log(mapConfigObj);

      // check if there is a location
      if (mapConfigObj.location) {
        var myLatlng = new google.maps.LatLng(
          mapConfigObj.location.lat,
          mapConfigObj.location.lng
        );
        var mapOptions = {
          zoom: Number(mapConfigObj.mapZoom),
          styles: mapConfigObj.theme == 'Dark' ? darkStyles : [],
          center: myLatlng,
        };
        var map = new google.maps.Map(mapdom, mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          title: mapConfigObj.locationName || '',
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
      } else {
        console.log('Doing a map search');
        if (mapConfigObj.indexName) {
          var mapOptions = {
            styles: mapConfigObj.theme == 'Dark' ? darkStyles : [],
          };
          //var map = new google.maps.Map(mapdom, mapOptions);

          // Algolia!
          const searchClient = algoliasearch(
            '{ALGOLIA_ID}',
            '{ALGOLIA_SECRET}'
          );

          const search = instantsearch({
            indexName: mapConfigObj.indexName,
            searchClient,
          });

          search.addWidgets([
            instantsearch.widgets.searchBox({
              container: '#searchbox',
            }),
            instantsearch.widgets.geoSearch({
              container: mapdom,
              googleReference: window.google,
              mapOptions: mapOptions,
            }),
            instantsearch.widgets.hits({
              container: '#hits',
              templates: {
                item: `
                    <h2>
                      {{#helpers.highlight}}{ "attribute": "locationName" }{{/helpers.highlight}}
                    </h2>
                    <p>{{ locationName }}</p>
                  `,
              },
            }),
          ]);

          search.start();
        }
      }
    });
  }

  exports.Utils = window.AmpCa.Utils || exports.Utils || {};
  exports.Utils.initMaps = initMaps;

  function initMapScripts() {
    var script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2MW4aCl4L8_eP7xTPAgOOCRIdgK1wCe0&callback=AmpCa.Utils.initMaps&libraries=&v=weekly';
    script.defer = true;
    document.head.appendChild(script);
  }

  window.addEventListener('load', function () {
    console.log('Load triggered');
    initMapScripts();
  });
})((window.AmpCa = window.AmpCa || {}));
