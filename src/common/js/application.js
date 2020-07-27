'use strict';

(function (exports) {
  var getUrlParameter = function getUrlParameter(sParam, sDefault) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    if (sDefault) return sDefault;
  };

  var vse = getUrlParameter('vse', '{DELIVERY_BASE}');
  var key = getUrlParameter('key', 'web/home');
  var menukey = getUrlParameter('menukey', 'web/menu');
  var locale = getUrlParameter('locale', 'en-GB,en-*,*');
  var cid = getUrlParameter('cid');
  var hidemenu = getUrlParameter('hidemenu', 'false');
  hidemenu = hidemenu == 'true' ? true : false;

  /** Init the SDK */
  var AmpSDKObj = {
    hubName: '{COMPANY_TAG}',
    stagingEnvironment: vse,
    locale: locale,
  };
  var clientV2 = new ampDynamicContent.ContentClient(AmpSDKObj);

  function loadContent(key, container) {
    console.log('asked to load!', cid);
    clientV2
      .getContentItemByKey(cid)
      .then((content) => {
        console.log(content.body);
        /*var htmltorender = rendertemplate(content.body);
            console.log(htmltorender);
            document.getElementById('amp-content-replace').innerHTML = htmltorender;*/
      })
      .catch((error) => {
        console.log('content not found', error);
      });
  }

  loadContent(menukey, 'amp-menu-holder');
  loadContent(key, 'amp-page-content-holder');

  function evaluateAmplienceLink(lnk) {
    console.log('link clicked = ' + lnk);
    if (lnk.indexOf('https://') >= 0) {
      window.open(lnk, '_self');
    } else {
      var currenturl = window.location.href;
      if (currenturl.indexOf('&key=') >= 0) {
        // Replace the key
        var urlarr = currenturl.split('&');

        for (var i = 0; i < urlarr.length; i++) {
          var line = urlarr[i];
          if (line.indexOf('key=') == 0) {
            urlarr[i] = 'key=' + lnk;
          }
        }
        var newurl = urlarr.join('&');
        window.open(newurl, '_self');
      } else {
        if (currenturl.indexOf('?') >= 0) {
          window.open(currenturl + '&key=' + lnk, '_self');
        } else {
          window.open(currenturl + '?key=' + lnk, '_self');
        }
      }
    }
  }
  exports.Utils = window.AmpCa.Utils || exports.Utils || {};
  exports.Utils.evaluateAmplienceLink = evaluateAmplienceLink;
})
(
  window.AmpCa = window.AmpCa || {}
);
