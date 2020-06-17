'use strict';

(function (exports) {
  var partialsToLoad = [
    'interflora-templateChooser',
    'acc-template-navigation',
    'acc-template-navigation-slot',
    'acc-template-flexible-slot',
    'acc-template-image-poi',
    'acc-template-rich-text',
    'acc-template-curated-product-list-ct',
    'image-src',
    'source',
    'acc-template-banner-personalised',
    'acc-template-landing-page',
    'acc-template-algolia-personalised-content',
    'acc-template-article',
    'acc-template-article-snippet',
    'acc-template-card-interflora',
    'acc-template-cardList-interflora',
    'acc-template-interflora-video',
  ];

  var loadLength = partialsToLoad.length;
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

  var vse = getUrlParameter('vse', 'emilydemo.cdn.content.amplience.net');
  var key = getUrlParameter('key', 'interflora/web/home');
  var menukey = getUrlParameter('menukey', 'interflora/web/navigation');
  var locale = getUrlParameter('locale', 'en-US,en-*,*');
  var segment = getUrlParameter('segment', '');
  var segment = getUrlParameter('customerid', '');
  var cid = getUrlParameter('cid');
  var hidemenu = getUrlParameter('hidemenu', 'false');
  hidemenu = hidemenu == 'true' ? true : false;

  var CT_AccessToken;
  var creds = 'u1dO23i5JuRIRllKMk9NOCVV:VwxflHqzerWZvlyNenAzCZGgfhZQ0uRc';
  var creds64 = window.btoa(creds);
  var products;
  var dynamicProducts;

  var searchClient;

  /**
   * Promo Banner - Javascript is used to animate the sections for resolutions that can only show a single section at a time
   * @param element
   */
  function PromoBanner(element) {
    var $children = [].slice.call(
      element.querySelectorAll('.amp-dc-promo-block')
    );
    var currentItemNum = 2;
    var winWidth = window.innerWidth;

    if ($children.length < 2) {
      $children[0].classList.add('dc-fade-in');
      return;
    }

    $children.forEach(function ($child) {
      $children[currentItemNum - 1].classList.remove('dc-fade-in');
    });

    $children[currentItemNum - 1].classList.add('dc-fade-in');

    var getNextItem = function () {
      if (currentItemNum === $children.length) {
        currentItemNum = 1;
      } else {
        currentItemNum += 1;
      }

      return currentItemNum - 1;
    };

    setInterval(function () {
      winWidth = window.innerWidth;
      var $fadedElems = [].slice.call(element.querySelectorAll('.dc-fade-in'));
      if (winWidth > 768) {
        return;
      }

      var itemToShow = getNextItem();
      if ($fadedElems.length > 0) {
        $fadedElems.forEach(function ($fadeElem) {
          $fadeElem.classList.remove('dc-fade-in');
        });
      }
      $children[itemToShow].classList.add('dc-fade-in');
    }, 5000);
  }

  /**
   * Slider - Javascript is used to add animation and navigation functionality to the slider
   * @param element
   */
  function Slider(element) {
    var data = {
      infinite: element.getAttribute('data-infinite') === 'true' ? 1 : 0,
      navigation: element.getAttribute('data-navigation') === 'true',
      autoplay: element.getAttribute('data-autoplay') === 'true',
    };

    var lory = window.lory
      ? window.lory
      : typeof require === 'function'
      ? require('lory.js').lory
      : null;
    var slider = lory(element, data);

    if (!data.infinite) {
      this.disableNavButtons(element, slider);
    }

    if (data.navigation) {
      this.navigationDots(element, slider, data);
    }

    this.enableSwipeGesturesOnVideo(element);
  }

  Slider.prototype.disableNavButtons = function (element, sliderInstance) {
    var $slides = Array.prototype.slice.call(
      element.querySelectorAll('.js_dc_slide'),
      0
    );
    var $prevButton = element.querySelector('.js_prev');
    var $nextButton = element.querySelector('.js_next');
    var disabledClass = 'ctrl-disabled';

    if (!$prevButton && !$nextButton) {
      return false;
    }

    var navButtonsBehave = function (evt) {
      var slideIndex = sliderInstance.returnIndex();
      if (slideIndex === 0) {
        $prevButton.classList.add(disabledClass);
        $nextButton.classList.remove(disabledClass);
      } else if (slideIndex === $slides.length - 1) {
        $prevButton.classList.remove(disabledClass);
        $nextButton.classList.add(disabledClass);
      } else {
        $prevButton.classList.remove(disabledClass);
        $nextButton.classList.remove(disabledClass);
      }
    };

    if (sliderInstance.returnIndex() === 0) {
      $prevButton.classList.add(disabledClass);
    }

    element.addEventListener('after.lory.slide', navButtonsBehave);
    element.addEventListener('on.lory.resize', navButtonsBehave);
  };

  Slider.prototype.autoslide = function ($slider, sliderInstance) {
    var iterate = function () {
      sliderInstance.next();
    };
    var sim;

    return {
      start: function () {
        sim = setInterval(iterate, 3000);
      },
      stop: function () {
        clearTimeout(sim);
      },
      init: function () {
        this.start();
      },
    };
  };

  Slider.prototype.navigationDots = function (
    element,
    sliderInstance,
    sliderSettings
  ) {
    var dots = Array.prototype.slice.call(
      element.querySelectorAll('.js_dc_slider_dot'),
      0
    );

    var autoSlide =
      sliderSettings.autoplay && new this.autoslide(element, sliderInstance);

    var attachNavEvents = function () {
      dots.forEach(function ($dot, ind) {
        if (ind === 0) {
          $dot.classList.add('active');
          autoSlide && autoSlide.init($dot);
        }
        $dot.addEventListener('click', function (evt) {
          sliderInstance.slideTo(ind);
        });
      });
    };

    var selectActiveDot = function (evt) {
      dots.forEach(function ($dot, ind) {
        $dot.classList.remove('active');
      });

      console.log(sliderSettings);
      var currentSlide = sliderSettings.infinite
        ? evt.detail.currentSlide - 1
        : evt.detail.currentSlide;
      dots[currentSlide].classList.add('active');
      autoSlide && autoSlide.stop();
      autoSlide && autoSlide.start();
    };

    var resetToFirst = function () {
      dots.forEach(function ($dot, ind) {
        if (ind === 0) {
          $dot.classList.add('active');
          autoSlide && autoSlide.stop();
          autoSlide && autoSlide.start();
        } else {
          $dot.classList.remove('active');
        }
      });
    };

    attachNavEvents();
    element.addEventListener('after.lory.slide', selectActiveDot);
    // element.addEventListener('on.lory.resize', resetToFirst);
  };

  Slider.prototype.enableSwipeGesturesOnVideo = function (element) {
    if (navigator.userAgent.match(/Android/i)) {
      var videos = element.querySelectorAll('.amp-dc-slider .amp-dc-video');
      videos = Array.prototype.slice.call(videos, 0);
      videos.forEach(function (video, ix) {
        var overlay = document.createElement('div');
        overlay.style.width = video.clientWidth + 'px';
        overlay.style.height = video.clientHeight - 30 + 'px';
        overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
        overlay.className = 'inactive-video';
        video.parentNode.parentNode.insertBefore(overlay, video.parentNode);
        overlay.addEventListener('click', function () {
          overlay.classList.add('no-overlay');
          video.play();
        });
        video.addEventListener('pause', function () {
          overlay.classList.remove('no-overlay');
        });
        window.addEventListener('resize', function () {
          overlay.style.width = video.clientWidth + 'px';
          overlay.style.height = video.clientHeight - 30 + 'px';
          overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
        });
      });
    }
  };

  /**
   * The code below finds dom elements output from templates
   * and invokes the associated Javascript component
   */

  function attachComponent(selector, component) {
    [].slice
      .call(document.querySelectorAll(selector))
      .forEach(function (element) {
        if (!element.component) {
          element.component = new component(element);
        }
      });
  }

  /**
   * scrollCard - is used to scroll card if its content doesn't fit container
   */

  var interval;

  function scrollCard() {
    var container = document.getElementById('card-container');
    if (!container) {
      return false;
    }
    var child = container.childNodes[0].nextSibling;
    var length = child.clientHeight;
    var parent = container.clientHeight;
    var xH;

    if (length / parent > 1.5) {
      if (interval) {
        clearInterval(interval);
      }

      interval = setInterval(function () {
        container.classList.remove('transition');
        xH = child.style.top || 0;
        xH = parseInt(xH);
        if (Math.abs(parseInt(xH)) + parent < length) {
          xH = xH - 1;
          xH = xH + 'px';
          child.style.top = xH;
        } else {
          clearInterval(interval);
          setTimeout(scrollLeave, 1000);
        }
      }, 10);
    }
  }

  function scrollLeave() {
    var container = document.getElementById('card-container');
    var child = container.childNodes[0].nextSibling;
    container.classList.add('with-transition');

    setTimeout(function () {
      child.style.top = '0px';
      container.classList.remove('with-transition');
      container.classList.add('transition');

      clearInterval(interval);
    }, 1000);
  }

  function initApplication() {
    var rs = getUrlParameter('template');
    if (rs) {
      attachComponent('.amp-dc-promo-banner', PromoBanner);
      attachComponent('.amp-dc-slider', Slider);
      initPOI();
      findProducts();
      configureSearch();
      return;
    }

    partialsToLoad.forEach(function (item, index) {
      var loadstr =
        'Loading Partial ' + (index + 1) + '/' + loadLength + ' : ' + item;
      $('#loader-text').html(loadstr);
      console.log(loadstr);
      loadDynamicHBSTemplates(item);
    });

    var rendertemplate;

    function loadDynamicHBSTemplates(name) {
      $.ajax({
        url: 'https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/interflora/templates/' + name + '.html',
        dataType: 'html',
        cache: true,
        success: function (data) {
          Handlebars.registerPartial(name, data);
          partialsToLoad = _.without(partialsToLoad, name);
          var loadstr =
            'Registered Partial : ' +
            name +
            '. ' +
            partialsToLoad.length +
            ' left to load';
          $('#loader-text').html(loadstr);
          console.log(loadstr);
          if (partialsToLoad.length < 1) {
            var loadstr = 'Files Loaded - loading content...';
            $('#loader-text').html(loadstr);
            console.log(loadstr);
            rendertemplate = Handlebars.compile(
              '{{> interflora-templateChooser this}}'
            );

            if (!hidemenu) {
              var menuURL =
                'https://' +
                vse +
                '/content/key/' +
                menukey +
                '?locale=' +
                locale;
              $.getJSON(menuURL, { format: 'inlined', depth: 'all' }).done(
                function (data) {
                  var htmltorender = rendertemplate(data.content);
                  console.log(htmltorender);
                  $('#amp-menu-holder').html(htmltorender);
                }
              );
            }

            var url = 'https://' + vse + '/content/key/' + key;
            if (cid) url = 'https://' + vse + '/content/id/' + cid;

            $.getJSON(url + '?locale=' + locale, {
              format: 'inlined',
              depth: 'all',
            }).done(function (data) {
              var loadstr = 'DONE!';
              $('#loader-text').html(loadstr);
              console.log(loadstr);
              var htmltorender = rendertemplate(data.content);
              console.log(htmltorender);
              $('#amp-page-content-holder').html(htmltorender);

              attachComponent('.amp-dc-promo-banner', PromoBanner);
              attachComponent('.amp-dc-slider', Slider);
              initPOI();
              findProducts();
              configureSearch();
              /*bindEventsGlobalPromoBanner();*/
            });
          }
        },
      });
    }
  }

  function initPOI() {
    var params = window.poiDefaults || {
      domain: 'https://' + vse,
      account: 'presales',
      containerClass: 'amp-dc-poi-image',
      imgClass: 'amp-dc-image-pic',
      images: [
        {
          name: '*',
          polygonCallbacks: [
            {
              target: '*',
              action: 'click',
              callback: function (evt, settings) {
                console.log('generic click', settings);
              },
              initCallback: function (settings) {
                console.log('init callback polygon', settings);
              },
            },
          ],
          hotspotCallbacks: [
            {
              target: '*',
              action: 'click',
              callback: function (evt, settings) {
                console.log('yay, i was clicked :)', settings);
              },
              initCallback: function (settings) {
                console.log('init callback hotspot', settings);
              },
            },
            {
              target: '*',
              action: 'mouseover',
              callback: function (evt, settings) {
                console.log('yay, i was hovered :)', settings);
              },
              initCallback: function (settings) {
                console.log('init callback hotspot', settings);
              },
            },
          ],
        },
      ],
    };
    var poi = new window.POI(params);
    poi.init();
  }
  // because we have a different search page, we need to redirect if its a key change to the app.
  function evaluateAmplienceMenuLink(lnk) {
    console.log('link clicked = ' + lnk);
    if (lnk.indexOf('https://') >= 0) {
      window.open(lnk, '_self');
    } else {
      // Always need to replace the search / product page with the main URL for the application....
      var currenturl = window.location.href;
      if ( (currenturl.indexOf('/search.html') >=0 ) || (currenturl.indexOf('/product.html') >=0 ) ){
        // https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/interflora/templates/acc-template-preview-interflora.html
        currenturl = "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/interflora/templates/acc-template-preview-interflora.html" + window.location.href.substring(window.location.href.indexOf(".html") + 5);
      }

      if ( (currenturl.indexOf('&key=') >= 0) || (currenturl.indexOf('?key=') >= 0) ) {
        // Replace the key
        //var urlarr = currenturl.split('&');
        var urlarr = currenturl.split(/[?]|[&]/);
        for (var i = 0; i < urlarr.length; i++) {
          var line = urlarr[i];
          if (line.indexOf('key=') == 0) {
            urlarr[i] = 'key=' + lnk;
          }
        }
        var newurl = "";
        for(var h in urlarr){
          if(h == 0){
            newurl += urlarr[h]
          }
          if(h == 1){
            newurl += "?" + urlarr[h]
          }
          if(h > 1){
            newurl += "&" + urlarr[h]
          }
        }

        /*if(urlarr.length <= 2){
          newurl = urlarr.join('?')
        }else{
          newurl = urlarr.join('&');
        }*/
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

  function authenticateProductAPI(cb) {
    console.log('authenticating');
    $.ajax({
      url: 'https://auth.europe-west1.gcp.commercetools.com/oauth/token',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      data: {
        grant_type: 'client_credentials',
        scope: 'view_published_products:anyafinn',
      },
      cache: false,
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader('Authorization', 'Basic ' + creds64);
      },
      success: function (data) {
        console.log('Success');
        console.log(data);
        CT_AccessToken = data.access_token;
        cb();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('error');
        console.log(jqXHR, textStatus, errorThrown);
      },
    });
  }

  function drawProducts() {
    products.forEach(function (item) {
      var productCode = item.getAttribute('data-amp-product-code');
      $.ajax({
        url:
          'https://api.europe-west1.gcp.commercetools.com/anyafinn/product-projections/' +
          productCode +
          '?localeProjection=en',
        method: 'GET',
        dataType: 'json',
        context: item,
        cache: false,
        beforeSend: function (xhr) {
          /* Authorization header */
          xhr.setRequestHeader('Authorization', 'Bearer ' + CT_AccessToken);
        },
        success: function (data) {
          console.log('Success');
          console.log(data);
          try {
            var link = "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/interflora/product.html?productcode=" + data.masterVariant.sku;
            var image = data.masterVariant.images[0].url;
            var name = data.name['en'];
            //var description = data.description['en-GB'];
            var priceObj = data.masterVariant.prices[0].value;
            var price =
              '&pound;' +
              (priceObj.centAmount * 0.1).toFixed(priceObj.fractionDigits);

            var html =
              '<a class="amp-dc-card-wrap" href="' +
              link +
              '"><div class="amp-dc-card-wrap"><div class="amp-dc-card-img-wrap"><picture class="amp-dc-image"><img src="' +
              image +
              '?$product-list$" class="amp-dc-image-pic"/></picture></div><div class="amp-dc-card-text-wrap"><div class="amp-dc-card-name">' +
              name +
              '</div><p class="amp-dc-card-description"></p><div class="amp-dc-card-link">' +
              price +
              '</div></div></a></div>';
            item.innerHTML = html;
          } catch (e) {
            console.log('Error with CommerceTools Product:' + productCode);
            var html =
              '<a class="amp-dc-card-wrap" href="#"><div class="amp-dc-card-wrap"><div class="amp-dc-card-img-wrap"><picture class="amp-dc-image"><img src="https://i8.amplience.net/s/willow/noimagefound?$product-list$" class="amp-dc-image-pic"/></picture></div><div class="amp-dc-card-text-wrap"><div class="amp-dc-card-name">Product: ' +
              productCode +
              ' not found</div><p class="amp-dc-card-description">Please select another</p><div class="amp-dc-card-link"></div></div></a></div>';
            $(item).html(html);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('error');
          console.log(jqXHR, textStatus, errorThrown);
        },
      });
    });
  }

  function drawDynamicProducts() {
    dynamicProducts.forEach(function (item) {
      var productSearch = item.getAttribute('data-amp-product-search');
      var searchLimit = item.getAttribute('data-amp-product-limit');
      var ignores = item.getAttribute('data-amp-product-ignores');
      if (ignores) ignores = JSON.parse(ignores);
      console.log(ignores);
      $.ajax({
        url:
          'https://api.europe-west1.gcp.commercetools.com/{CT_PROJECT_KEY/product-projections/search?staged=false&fuzzy=true&limit=' +
          searchLimit +
          '&text.en="' +
          productSearch +
          '"',
        method: 'GET',
        dataType: 'json',
        context: item,
        cache: false,
        beforeSend: function (xhr) {
          /* Authorization header */
          xhr.setRequestHeader('Authorization', 'Bearer ' + CT_AccessToken);
        },
        success: function (data) {
          console.log('Success');
          console.log(data);

          if (data && data.count > 0) {
            var results = data.results;

            results.forEach(function (result) {
              try {
                if (!result.name['en-CA']) return;

                var brand = result.masterVariant.attributes.find(
                  (x) => x.name === 'webBrandName'
                ).value['en-CA'];
                var image = result.masterVariant.attributes.find(
                  (x) => x.name === 'largeImageUrl'
                ).value;
                if (image.indexOf('http://') >= 0) {
                  image = image.replace('http://', 'https://');
                }
                if (image.indexOf('images.ulta.com') < 0) return;
                var price = result.masterVariant.prices[0].value.centAmount;
                price /= 100;
                price = price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                });

                var html =
                  '<div class="amp-dc-prod-card"><a class="amp-dc-card-wrap" href=" https://www.ulta.com/amplience-link?productId=' +
                  result.key +
                  '"><div class="amp-dc-card-wrap"><div class="amp-dc-card-img-wrap"><picture class="amp-dc-image"><img src="' +
                  image +
                  '" class="amp-dc-image-pic"/></picture></div><div class="amp-dc-card-text-wrap"><div class="amp-dc-card-name">' +
                  result.name['en-CA'] +
                  '</div><p class="amp-dc-card-description">' +
                  brand +
                  '</p><div class="amp-dc-card-link">' +
                  price +
                  '</div></div></a></div></div>';
                $(item).append(html);
              } catch (e) {
                console.log('Error with CommerceTools Product:' + result.key);
                /*var html = '<a class="amp-dc-card-wrap" href=" https://www.ulta.com"><div class="amp-dc-card-wrap"><div class="amp-dc-card-img-wrap"><picture class="amp-dc-image"><img src=https://images.ulta.com/is/image/Ulta/no-image-found.jpg?$lg$" class="amp-dc-image-pic"/></picture></div><div class="amp-dc-card-text-wrap"><div class="amp-dc-card-name">Product: ' + result.key + ' not found</div><p class="amp-dc-card-description">Please select another</p><div class="amp-dc-card-link"></div></div></a></div>'
                                resultsstr += html;*/
              }
            });
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('error');
          console.log(jqXHR, textStatus, errorThrown);
        },
      });
    });
  }

  function findProducts() {
    products = document.querySelectorAll('[data-amp-product-code]');
    if (products.length >= 1) authenticateProductAPI(drawProducts);

    dynamicProducts = document.querySelectorAll('[data-amp-product-search]');
    if (dynamicProducts.length >= 1)
      authenticateProductAPI(drawDynamicProducts);
  }

  function configureSearch() {
    searchClient = algoliasearch('T7I8W0D1V2', 'c572522c02c617013a1f53c1fa9968e5');

    var algoliasearches = document.querySelectorAll('[data-amp-index-type]');
    algoliasearches.forEach(function (item) {
      var indexType = item.getAttribute('data-amp-index-type');
      var indexName;

      switch(indexType) {
        case "Banners":
          indexName = "interflora_content_test";
          break;
        case "Articles":
          indexName = "interflora_article_test"
          break;
        default:
          indexName = "content_test";
      }

      console.log('ALGOLIA INDEX TO USE: ' + indexName);
      var query = item.getAttribute('data-amp-query');
      var max = 1;
      var maxdata = item.getAttribute('data-amp-max');
      if(maxdata){
        max = Number(maxdata)
      }
      var index = searchClient.initIndex(indexName);
      var searchSettings = {
        hitsPerPage: max
      }
      index.search(query, searchSettings).then(({ hits }) => {
        console.log('QUERY RESPONSE:');
        console.log(hits);
        console.log(item);
        
        if(hits.length >= 1){
          $.ajaxSetup({ async: false })
          // How to make this into a carousel
          var htmlstr = '<div class="amp-dc-slider js_slider" data-infinite="true" data-autoplay="true"><div class="amp-dc-slider-frame js_frame"><ul class="amp-dc-slider-slides js_slides">';
          if(hits.length > 1){
            htmlstr += '</li></ul><span class="amp-dc-slider-prev js_prev js_slider_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg></span><span class="amp-dc-slider-next js_next js_slider_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg></span>';
          }
          htmlstr += '</div></div>';
          $(item).append(htmlstr)

          for(var c in hits){
            var htmlurl = hits[c].ampURLHTML;
            $.get(htmlurl, '', function (data) {
              $('.amp-dc-slider-slides').append('<li class="amp-dc-slider-slide js_dc_slide">' + data + '</div>');
              //$(item).append('<li class="amp-dc-slider-slide js_dc_slide">' + data + '</div>');
            });
          }
          /*if(hits.length > 1){
            $(item).append('</li></ul><span class="amp-dc-slider-prev js_prev js_slider_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg></span><span class="amp-dc-slider-next js_next js_slider_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg></span>')
          }
          $(item).append('</div></div>')*/
          $.ajaxSetup({ async: true });
          attachComponent('.amp-dc-slider', Slider);
        }
      })
    });
  }

  function attachComponents() {
    var container = document.getElementById('card-container');
    if (container) {
      attachComponent('.amp-dc-promo-banner', PromoBanner);
      attachComponent('.amp-dc-slider', Slider);
      initPOI();
      setTimeout(scrollCard, 2000);
    } else {
      initApplication();
    }
  }

  exports.Utils = exports.Utils || {};
  exports.Utils.attachComponents = attachComponents;
  exports.Utils.evaluateAmplienceMenuLink = evaluateAmplienceMenuLink;
  exports.Utils.searchClient = searchClient;

  /**
   * Automatically activate accelerator components when the page renders
   */
  window.addEventListener('load', function () {
    attachComponents();
  });
})((window.AmpCa = window.AmpCa || {}));

"use strict";window.POI=function(t){this.images=[],this.imgsLoaded=0,this.params=t},window.POI.prototype={generateData:function(t,e){var s,n=this,a=n.getHotspots(t.data);if(null!==a){var i=n.findImg(t.img,e);s={dimensions:{width:t.data.width,height:t.data.height},$img:i,data:t.img,name:t.img.name,points:a,svg:null},n.images.push(s)}n.imgsLoaded+=1,t.callback(s)},getImgData:function(t){for(var e=this,s=this.params.images,n=document.querySelectorAll("img."+this.params.imgClass),a=Array.apply(null,n),i=function(s){e.ajax.atomic(e.params.domain+"/i/"+e.params.account+"/"+s.name+".json?metadata=true&func=amp.jsonReturn&v="+(new Date).getTime()).then(function(n){var i=n.data,o=e.clone(a);e.findAllImages(s,o).forEach(function(){e.generateData({data:i,img:s,callback:function(e){t(e)}},a)})})},o=0;o<s.length;o++)!function(){var r=o;if("*"===s[r].name)for(var l=0;l<n.length;l++)!function(){var t,a=l,o=n[a],u=o.getAttribute("src"),c=u.split("?");if(t=c[0].split(e.params.account+"/"),t=t[t.length-1].split("/"),t=t[0],s.find(function(e){return e.name===t}))return!1;i({name:t,hotspotCallbacks:s[r].hotspotCallbacks,polygonCallbacks:s[r].polygonCallbacks})}();else s[r].data?e.generateData({data:s[r].data,img:s[r],callback:function(e){t(e)}},a):i(s[r])}()},findAllImages:function(t,e){for(var s=this.params.imgAttribute||"src",n=[],a=0;a<e.length;a++){var i=new RegExp(t.name),o=e[a].getAttribute(s).match(i);o&&o.length>0&&n.push(e[a])}return n},findImg:function(t,e){for(var s=this.params.imgAttribute||"src",n=null,a=0;a<e.length;a++){var i=new RegExp(t.name),o=e[a].getAttribute(s).match(i);if(o&&o.length>0){n=e[a],e.splice(a,1);break}}return n},getHotspots:function(t){var e=null;t.constructor!==Array&&(t=[t]);for(var s=0;s<t.length;s++)t[s]&&t[s].metadata&&t[s].metadata.hotSpots&&t[s].metadata.hotSpots.constructor===Object&&t[s].metadata.hotSpots.hotSpots&&t[s].metadata.hotSpots.hotSpots.constructor===Object&&t[s].metadata.hotSpots.hotSpots.list&&t[s].metadata.hotSpots.hotSpots.list.length>0&&(e=t[s].metadata.hotSpots.hotSpots.list);return e},iteratePoints:function(t){if(t)for(var e=this.hotspots(),s=this.polygons(),n=t.points,a=0;a<n.length;a++)n[a].points.constructor===Array?s.create(n[a],t):e.create(n[a],t)},assignEvents:function(t,e,s,n){if(s&&s.length>0)for(var a=0;a<s.length;a++)!function(){var i=s[a];i.target!==e&&"*"!==i.target||(t.addEventListener(i.action,function(t){i.callback(t,n)},!1),i.initCallback&&i.initCallback(n))}()},init:function(){var t=this;this.getImgData(function(e){t.iteratePoints(e)})},clone:function(t){if(null==t||"object"!=typeof t)return t;var e=t.constructor();for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return e}},"object"==typeof exports&&(module.exports=POI),POI.prototype.dom={hasClass:function(t,e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)},getClosest:function(t,e){var s,n,a=e.charAt(0),i="classList"in document.documentElement;for("["===a&&(e=e.substr(1,e.length-2),s=e.split("="),s.length>1&&(n=!0,s[1]=s[1].replace(/"/g,"").replace(/'/g,"")));t&&t!==document&&1===t.nodeType;t=t.parentNode){if("."===a)if(i){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===a&&t.id===e.substr(1))return t;if("["===a&&t.hasAttribute(s[0])){if(!n)return t;if(t.getAttribute(s[0])===s[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}},POI.prototype.hotspots=function(){var t=this;return{create:function(e,s){var n=s.data.hotspotCallbacks,a=document.createElement("div"),i=e.selector,o=e.target;if(!i)return void console.warn("no selector specified");0===i.indexOf(".")?(i=i.slice(1),a.setAttribute("class",i)):0===i.indexOf("#")?(i=i.slice(1),a.setAttribute("id",i)):a.setAttribute("class",i),a.setAttribute("data-type","poi-hotspot");var r=t.dom.getClosest(s.$img,"."+t.params.containerClass);if(r&&t.dom.hasClass(r,t.params.containerClass)){var l=e.points.x.toString().slice(2);l=l.substr(0,2)+"."+l.substr(2);var u=e.points.y.toString().slice(2);u=u.substr(0,2)+"."+u.substr(2),a.style.position="absolute",a.style.left=l+"%",a.style.top=u+"%",r.style.position="relative",r.appendChild(a),o&&o.length>0&&(a.setAttribute("data-target",o),t.assignEvents(a,o,n,{$image:s.$img,$target:a,$parent:r,hotspot:e,imgInfo:s}))}else console.warn("No parent with specified className "+t.params.containerClass+" was found.")}}},POI.prototype.polygons=function(){var t=this;return{create:function(e,s){var n=s.data.polygonCallbacks,a=e.selector;if(!a)return void console.warn("no selector specified");var i,o=e.target,r=t.dom.getClosest(s.$img,"."+t.params.containerClass),l="http://www.w3.org/2000/svg",u=document.createElementNS(l,"g"),c=document.createElementNS(l,"polygon");if(s.svg?i=s.svg:(i=document.createElementNS(l,"svg"),i.setAttributeNS(null,"viewBox","0 0 "+s.dimensions.width+" "+s.dimensions.height),r.appendChild(i),s.svg=i),0===a.indexOf(".")?(a=a.slice(1),c.setAttributeNS(null,"class",a)):0===a.indexOf("#")?(a=a.slice(1),c.setAttributeNS(null,"id",a)):c.setAttributeNS(null,"class",a),r&&t.dom.hasClass(r,t.params.containerClass)){var p="";e.points.forEach(function(t){p+=s.dimensions.width*t.x+","+s.dimensions.height*t.y+" "}),c.setAttributeNS(null,"points",p),i.appendChild(u),u.appendChild(c),o&&o.length>0&&(c.setAttributeNS(null,"data-target",o),t.assignEvents(u,o,n,{$image:s.$img,$target:u,$parent:r,polygon:e,imgInfo:s}))}else console.warn("No parent with specified className "+t.params.containerClass+" was found.")}}},POI.prototype.ajax={settings:null,defaults:{method:"GET",username:null,password:null,data:{},headers:{"Content-type":"application/x-www-form-urlencoded"},responseType:"text",timeout:null,withCredentials:!1},supports:function(){return"XMLHttpRequest"in window&&"JSON"in window&&"Promise"in window},extend:function(){for(var t=this,e={},s=0;s<arguments.length;s++){var n=arguments[s];!function(s){for(var n in s)s.hasOwnProperty(n)&&("[object Object]"===Object.prototype.toString.call(s[n])?e[n]=t.extend(e[n],s[n]):e[n]=s[n])}(n)}return e},parse:function(t){var e;if("text"!==this.settings.responseType&&""!==this.settings.responseType)return{data:t.response,xhr:t};try{e=JSON.parse(t.responseText)}catch(s){e=t.responseText}return{data:e,xhr:t}},param:function(t){if("string"==typeof t||"[object FormData]"===Object.prototype.toString.call(t))return t;if(/application\/json/i.test(this.settings.headers["Content-type"])||"[object Array]"===Object.prototype.toString.call(t))return JSON.stringify(t);var e=[];for(var s in t)t.hasOwnProperty(s)&&e.push(encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e.join("&")},makeRequest:function(t){var e=new XMLHttpRequest,s=this,n=new Promise(function(n,a){e.onreadystatechange=function(){4===e.readyState&&(e.status>=200&&e.status<300?n(s.parse(e)):a({status:e.status,statusText:e.statusText,responseText:e.responseText}))},e.open(s.settings.method,t,!0,s.settings.username,s.settings.password),e.responseType=s.settings.responseType;for(var i in s.settings.headers)s.settings.headers.hasOwnProperty(i)&&e.setRequestHeader(i,s.settings.headers[i]);s.settings.timeout&&(e.timeout=s.settings.timeout,e.ontimeout=function(t){a({status:408,statusText:"Request timeout"})}),s.settings.withCredentials&&(e.withCredentials=!0),e.send(s.param(s.settings.data))});return n.cancel=function(){e.abort()},n},atomic:function(t,e){if(!this.supports())throw"Atomic: This browser does not support the methods used in this plugin.";return this.settings=this.extend(this.defaults,e||{}),this.makeRequest(t)}};