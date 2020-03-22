'use strict';

(function(exports) {

    var partialsToLoad = [
        "ultapoc-templateChooser",
        "acc-card-template-banner",
        "acc-card-template-blogPost",
        "acc-card-template-card",
        "acc-card-template-cardList",
        "acc-card-template-image",
        "acc-card-template-page",
        "acc-card-template-slider",
        "acc-card-template-splitBlock",
        "acc-card-template-video",
        "acc-template-banner-poi",
        "acc-template-banner",
        "acc-template-blogPost",
        "acc-template-card",
        "acc-template-cardList",
        "acc-template-cardsPreview",
        "acc-template-externalBlock",
        "acc-template-image-generator",
        "acc-template-image",
        "acc-template-megaMenu",
        "acc-template-page",
        "acc-template-preview",
        "acc-template-promo",
        "acc-template-promoList",
        "acc-template-roundel",
        "acc-template-slider",
        "acc-template-snippet",
        "acc-template-splitBlock",
        "acc-template-text",
        "acc-template-video",
        "acc-template-visualization",
        "cardsTemplateChooser",
        "image-src",
        "slotChooser",
        "source",
        "templateChooser",
        "ultapoc-template-content-block",
        "ultapoc-template-ct-product",
        "ultapoc-template-events-page",
        "ultapoc-template-header-subheader",
        "ultapoc-template-product-card",
        "ultapoc-template-product-list",
        "ultapoc-template-simple-banner",
        "ultapoc-template-simple-card",
        "ultapoc-template-ulta-image",
        "ultapoc-template-visualization",
        "acc-template-productSelector"
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
                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
            if(sDefault) return sDefault;
        };

        var vse = getUrlParameter('vse', '{DELIVERY_BASE}');
        var key = getUrlParameter('key', 'home');
        var menukey = getUrlParameter('menukey', 'menu');
        var locale = getUrlParameter('locale', 'en-US,en-*,*');
        var segment = getUrlParameter('segment', '');
        var cid = getUrlParameter('cid');
        var hidemenu = getUrlParameter('hidemenu', 'false');
        hidemenu = hidemenu == "true" ? true : false;

        var CT_AccessToken;
        var creds = "VKHSs03dGkJ0TvOqaCXGf54K:arLe-BvFLyktQ1ROVbfvqiV61DZSami9";
        var creds64 = window.btoa(creds);
        var products;

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

        $children.forEach(function($child) {
            $children[currentItemNum - 1].classList.remove('dc-fade-in');
        });

        $children[currentItemNum - 1].classList.add('dc-fade-in');

        var getNextItem = function() {
            if (currentItemNum === $children.length) {
                currentItemNum = 1;
            } else {
                currentItemNum += 1;
            }

            return currentItemNum - 1;
        };

        setInterval(function() {
            winWidth = window.innerWidth;
            var $fadedElems = [].slice.call(
                element.querySelectorAll('.dc-fade-in')
            );
            if (winWidth > 768) {
                return;
            }

            var itemToShow = getNextItem();
            if ($fadedElems.length > 0) {
                $fadedElems.forEach(function($fadeElem) {
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
            autoplay: element.getAttribute('data-autoplay') === 'true'
        };

        var lory = window.lory ? window.lory : (typeof require === 'function' ? require('lory.js').lory : null);
        var slider = lory(element, data);

        if (!data.infinite) {
            this.disableNavButtons(element, slider);
        }

        if (data.navigation) {
            this.navigationDots(element, slider, data);
        }

        this.enableSwipeGesturesOnVideo(element);
    }

    Slider.prototype.disableNavButtons = function(element, sliderInstance) {
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

        var navButtonsBehave = function(evt) {
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

    Slider.prototype.autoslide = function($slider, sliderInstance) {
        var iterate = function() {
            sliderInstance.next();
        };
        var sim;

        return {
            start: function() {
                sim = setInterval(iterate, 3000);
            },
            stop: function() {
                clearTimeout(sim);
            },
            init: function() {
                this.start();
            }
        }
    };

    Slider.prototype.navigationDots = function(element, sliderInstance, sliderSettings) {
        var dots = Array.prototype.slice.call(
            element.querySelectorAll('.js_dc_slider_dot'),
            0
        );

        var autoSlide = sliderSettings.autoplay && new this.autoslide(element, sliderInstance);

        var attachNavEvents = function() {
            dots.forEach(function($dot, ind) {
                if (ind === 0) {
                    $dot.classList.add('active');
                    autoSlide && autoSlide.init($dot);
                }
                $dot.addEventListener('click', function(evt) {
                    sliderInstance.slideTo(ind);
                });
            });
        };

        var selectActiveDot = function(evt) {
            dots.forEach(function($dot, ind) {
                $dot.classList.remove('active');
            });

            console.log(sliderSettings);
            var currentSlide = sliderSettings.infinite ?
                evt.detail.currentSlide - 1 :
                evt.detail.currentSlide;
            dots[currentSlide].classList.add('active');
            autoSlide && autoSlide.stop();
            autoSlide && autoSlide.start();
        };

        var resetToFirst = function() {
            dots.forEach(function($dot, ind) {
                if (ind === 0) {
                    $dot.classList.add('active');
                    autoSlide && autoSlide.stop();
                    autoSlide && autoSlide.start();
                } else {
                    $dot.classList.remove('active')
                }
            });
        };

        attachNavEvents();
        element.addEventListener('after.lory.slide', selectActiveDot);
        // element.addEventListener('on.lory.resize', resetToFirst);
    };

    Slider.prototype.enableSwipeGesturesOnVideo = function(element) {
        if (navigator.userAgent.match(/Android/i)) {
            var videos = element.querySelectorAll(
                '.amp-dc-slider .amp-dc-video'
            );
            videos = Array.prototype.slice.call(videos, 0);
            videos.forEach(function(video, ix) {
                var overlay = document.createElement('div');
                overlay.style.width = video.clientWidth + 'px';
                overlay.style.height = video.clientHeight - 30 + 'px';
                overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
                overlay.className = 'inactive-video';
                video.parentNode.parentNode.insertBefore(
                    overlay,
                    video.parentNode
                );
                overlay.addEventListener('click', function() {
                    overlay.classList.add('no-overlay');
                    video.play();
                });
                video.addEventListener('pause', function() {
                    overlay.classList.remove('no-overlay');
                });
                window.addEventListener('resize', function() {
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
        [].slice.call(document.querySelectorAll(selector))
            .forEach(function(element) {
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
                clearInterval(interval)
            }

            interval = setInterval(function() {
                container.classList.remove('transition');
                xH = child.style.top || 0;
                xH = parseInt(xH);
                if (Math.abs(parseInt(xH)) + parent < length) {
                    xH = xH - 1;
                    xH = xH + "px";
                    child.style.top = xH;
                } else {
                    clearInterval(interval);
                    setTimeout(scrollLeave, 1000);
                }
            }, 10)
        }
    }

    function scrollLeave() {
        var container = document.getElementById('card-container');
        var child = container.childNodes[0].nextSibling;
        container.classList.add('with-transition');

        setTimeout(function() {
            child.style.top = '0px';
            container.classList.remove('with-transition');
            container.classList.add('transition');

            clearInterval(interval);
        }, 1000);
    }

    function initApplication() {
       
        partialsToLoad.forEach(function (item, index) {
            var loadstr = "Loading Partial " + (index+1) + "/" + loadLength + " : " + item
            $("#loader-text").html(loadstr)
            console.log(loadstr);
            loadDynamicHBSTemplates(item);
        });

        var rendertemplate;

        function loadDynamicHBSTemplates(name){
                $.ajax({
                    url: "https://presalesadisws.s3.eu-west-1.amazonaws.com/demo/ta/templates/" + name + ".html",
                    dataType: 'html',
                    cache: false,
                    success: function(data) {
                        Handlebars.registerPartial(name, data);
                        partialsToLoad = _.without(partialsToLoad, name);
                        var loadstr = "Registered Partial : " + name + ". " + partialsToLoad.length + " left to load";
                        $("#loader-text").html(loadstr)
                        console.log(loadstr);
                        if( partialsToLoad.length <1){
                            var loadstr = "Files Loaded - loading content...";
                            $("#loader-text").html(loadstr)
                            console.log(loadstr);
                            rendertemplate = Handlebars.compile("{{> ultapoc-templateChooser this}}");

                            if (!hidemenu) {
                                var menuURL = "https://" + vse + "/content/key/" + menukey + "?locale=" + locale;
                                $.getJSON(menuURL, { format: "inlined", depth: "all" })
                                    .done(function(data) {
                                        var htmltorender = rendertemplate(data.content)
                                        console.log(htmltorender);
                                        $('#amp-menu-holder').html(htmltorender);
                                        
                                    });
                            }

                             var url = "https://" + vse + "/content/key/" + key;
                            if (cid) url = "https://" + vse + "/content/id/" + cid;

                            $.getJSON(url + "?locale=" + locale, { format: "inlined", depth: "all" })
                                .done(function(data) {
                                    var loadstr = "DONE!";
                                    $("#loader-text").html(loadstr)
                                    console.log(loadstr);
                                    var htmltorender = rendertemplate(data.content)
                                    console.log(htmltorender);
                                    $('#amp-page-content-holder').html(htmltorender);

                                    attachComponent('.amp-dc-promo-banner', PromoBanner);
                                    attachComponent('.amp-dc-slider', Slider);
                                    initPOI();
                                    findProducts();
                                    /*bindEventsGlobalPromoBanner();*/
                                });
                        }
                    }
                });
            }

    }

    function initPOI() {
        var params = window.poiDefaults || {
            domain: 'https://' + vse,
            account: '{COMPANY_TAG}',
            containerClass: 'amp-dc-poi-image',
            imgClass: 'amp-dc-image-pic',
            images: [{
                name: '*',
                polygonCallbacks: [{
                    target: "*",
                    action: "click",
                    callback: function(evt, settings) {
                        console.log('generic click', settings);

                    },
                    initCallback: function(settings) {
                        console.log('init callback polygon', settings);
                    }
                }],
                hotspotCallbacks: [{
                        target: "*",
                        action: "click",
                        callback: function(evt, settings) {
                            console.log('yay, i was clicked :)', settings);
                        },
                        initCallback: function(settings) {
                            console.log('init callback hotspot', settings);
                        }
                    },
                    {
                        target: "*",
                        action: "mouseover",
                        callback: function(evt, settings) {
                            console.log('yay, i was hovered :)', settings);
                        },
                        initCallback: function(settings) {
                            console.log('init callback hotspot', settings);
                        }
                    }
                ]
            }]
        };
        var poi = new window.POI(params);
        poi.init();
    }

    function evaluateAmplienceMenuLink(lnk) {
        console.log("link clicked = " + lnk);
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
                window.open(newurl, '_self')

            } else {
                if (currenturl.indexOf('?') >= 0) {
                    window.open(currenturl + "&key=" + lnk, '_self')
                } else {
                    window.open(currenturl + "?key=" + lnk, '_self')
                }

            }
        }
    }
            
    function authenticateProductAPI(cb){
        console.log("authenticating")
        $.ajax({
            url: 'https://auth.us-central1.gcp.commercetools.com/oauth/token',
            method: "POST",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            data: {
                grant_type: "client_credentials",
                scope: "view_published_products:ulta-ca-qa-1"
            },
            cache: false,
            beforeSend: function (xhr) {
                /* Authorization header */
                xhr.setRequestHeader("Authorization", "Basic " + creds64);
            },
            success: function (data) {
                console.log("Success")
                console.log(data);
                CT_AccessToken = data.access_token;
                cb();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error")
                console.log(jqXHR, textStatus, errorThrown)
            }
        });
    }

    function drawProducts(){
        products.forEach(function(item) {
            var productCode = item.getAttribute('data-amp-product-code');
             $.ajax({
                url: 'https://api.us-central1.gcp.commercetools.com/ulta-ca-qa-1/product-projections/' + productCode + '?localeProjection=en-CA',
                method: "GET",
                dataType: "json",
                context: item,
                cache: false,
                beforeSend: function (xhr) {
                    /* Authorization header */
                    xhr.setRequestHeader("Authorization", "Bearer " + CT_AccessToken);
                },
                success: function (data) {
                    console.log("Success")
                    console.log(data);
                    /** Information to get: 
                        name = name.en-CA
                        description = description.en-CA
                        brand = masterVariant.attributes where name=webBrandName > value.en-CA
                        prodictId = https://www.ulta.com/silk-therapy-original?productId={{key}}xlsImpprod3530073
                    **/
                    var brand = data.masterVariant.attributes.find(x => x.name === 'webBrandName').value["en-CA"];
                    var image = data.masterVariant.attributes.find(x => x.name === 'largeImageUrl').value;
                    var price = data.masterVariant.prices[0].value.centAmount;
                    price /= 100;
                    price = price.toLocaleString("en-US", {style:"currency", currency:"USD"});

                    var html = '<a class="amp-dc-card-wrap" href=" https://www.ulta.com/amplience-link?productId=' + data.key + '"><div class="amp-dc-card-wrap"><div class="amp-dc-card-img-wrap"><picture class="amp-dc-image"><img src="' + image + '" class="amp-dc-image-pic"/></picture></div><div class="amp-dc-card-text-wrap"><div class="amp-dc-card-name">' + data.name["en-CA"] + '</div><p class="amp-dc-card-description">' + brand + '</p><div class="amp-dc-card-link">' + price + '</div></div></a></div>'
                    $(item).html(html);

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("error")
                    console.log(jqXHR, textStatus, errorThrown)
                }
            });
        })
    }     

    function findProducts(){
        products = document.querySelectorAll('[data-amp-product-code]');
        if(products.length >=1) authenticateProductAPI(drawProducts);
    }

    function attachComponents() {
        var container = document.getElementById('card-container');
        if (container) {
            attachComponent('.amp-dc-promo-banner', PromoBanner);
            attachComponent('.amp-dc-slider', Slider);
            initPOI();
            setTimeout(scrollCard, 2000);
        }else{
           initApplication(); 
        }
    }

    exports.Utils = exports.Utils || {};
    exports.Utils.attachComponents = attachComponents;
    exports.Utils.evaluateAmplienceMenuLink = evaluateAmplienceMenuLink;

    /**
     * Automatically activate accelerator components when the page renders
     */
    window.addEventListener('load', function() {
        attachComponents();
    });

})
(
    window.AmpCa = window.AmpCa || {}
);