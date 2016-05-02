
var $ = jQuery.noConflict();

(function($) {
    "use strict";

    /*-------------------------------------------------*/
    /* =  loader
    /*-------------------------------------------------*/
    Pace.on("done", function(){
        $("#myloader").fadeOut(500);
    });
    /*-------------------------------------------------*/
    /* =  Menu
    /*-------------------------------------------------*/
    try {
        var width  =  $(window).width();
        
        $('.menu-button').on("click",function() {
            $('#menu').toggleClass('open');
            $('#menu-basic').toggleClass('open');
            $('nav').toggleClass('nav-open');
            $('#menu').toggleClass('animated fadeInDown');
            $('#menu-basic').toggleClass('animated fadeInDown');
            if(width<992){
                $('body').toggleClass('no-scroll');
            }
        });
        $('.menu-holder ul > li:not(.submenu) > a').on("click",function() {
            $('#menu').toggleClass('open');
        });
    } catch(err) {

    };
    /*-------------------------------------------------*/
    /* =  Sticky menu
    /*-------------------------------------------------*/
    $(window).on('scroll', function (){

        var scroll  =  $(window).scrollTop();
        var height  =  $(window).height();

        if( scroll >= 90 ) {
            $('.sticky-header').addClass("fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
        } else if ( scroll <= height ) {
            $('.sticky-header').removeClass("fixed-top fadeInDown");
        } else {
            $('.sticky-header').removeClass("fixed-top animated fadeInDown");
        }
    });
    /*-------------------------------------------------*/
    /* =  Slider
    /*-------------------------------------------------*/
    try {
        $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: false,
                useCSS: false,
                start: function(slider){
                    $('.slides').show();
                    $('.slides li').click(function(event){
                        event.preventDefault();
                        slider.flexAnimate(slider.getTarget("next"));
                    });
                }
            });
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/
    try {
        var $mainContainer=$('.gallery-items');
        $mainContainer.imagesLoaded( function(){

            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                $(window).load(function () {
                    var $container=$('.gallery-items').isotope({itemSelector:'.one-item'});

                    $('#gallery .filters').on('click','li',function(){
                        var filterValue=$(this).attr('data-filter');$container.isotope({
                            filter:filterValue});
                    });
                    $('#gallery .filters').each(function(i,buttonGroup){
                        var $buttonGroup=$(buttonGroup);
                        $buttonGroup.on('click','li',function(){
                            $buttonGroup.find('.is-checked').removeClass('is-checked');
                            $(this).addClass('is-checked');
                        });
                    });
                });
            } else {
                var $container=$('.gallery-items').isotope({itemSelector:'.one-item'});

                $('#gallery .filters').on('click','li',function(){
                    var filterValue=$(this).attr('data-filter');$container.isotope({
                        filter:filterValue});
                });
                $('#gallery .filters').each(function(i,buttonGroup){
                    var $buttonGroup=$(buttonGroup);
                    $buttonGroup.on('click','li',function(){
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });
            }
        });
    } catch(err) {

    }
    //gallery with border
    try {
        var $mainContainerBorder=$('.gellery-items.gutter');
        $mainContainerBorder.imagesLoaded( function(){

            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                $(window).load(function () {
                    var $container=$('.gallery-items.gutter').isotope({
                        itemSelector:'.one-item',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.one-item',
                            gutter: 30
                        },
                    });

                    $('#gallery .filters').on('click','li',function(){
                        var filterValue=$(this).attr('data-filter');$container.isotope({
                            filter:filterValue});
                    });
                    $('#gallery .filters').each(function(i,buttonGroup){
                        var $buttonGroup=$(buttonGroup);
                        $buttonGroup.on('click','li',function(){
                            $buttonGroup.find('.is-checked').removeClass('is-checked');
                            $(this).addClass('is-checked');
                        });
                    });
                });
            } else {
                var $container=$('.gallery-items.gutter').isotope({
                    itemSelector:'.one-item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.one-item',
                        gutter: 30
                    },
                    percentPosition: true
                });

                $('#gallery .filters').on('click','li',function(){
                    var filterValue=$(this).attr('data-filter');$container.isotope({
                        filter:filterValue});
                });
                $('#gallery .filters').each(function(i,buttonGroup){
                    var $buttonGroup=$(buttonGroup);
                    $buttonGroup.on('click','li',function(){
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });
            }
        });
    } catch(err) {

    }
    //blog masonry
    try {
        var $blogContainer = $('.masonry-grid');
        $blogContainer.imagesLoaded( function(){
            $blogContainer.isotope({itemSelector: '.masonry-item', layoutMode: 'masonry' });
            $(".blog-carousel").owlCarousel({
                loop:true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                items:1,
                autoplay:true,
                autoplayHoverPause:false,
                dots:true
            });
            $blogContainer.isotope('layout');
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Magnific popup
    /*-------------------------------------------------*/
    try {
        $('.gallery-items').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.lightbox',
                type: 'image',
                fixedContentPos: true,
                gallery: {
                    enabled:true
                },
                closeBtnInside: false
            });
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: true
        });
        $('.lightbox-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true
            },
            closeBtnInside: false
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Instafeed
    /*-------------------------------------------------*/
    var settings = {"accessToken":"", "userId":"1661129930"}; //Add your access token and the instagram user id to show the profile. AccessToken to test 393402381.1677ed0.d26e74eb93b04d9b8b729cdf097c3f55
    try {
        var userFeed = new Instafeed({
            get: 'user',
            userId: settings.userId,
            accessToken: settings.accessToken,
            resolution: 'standard_resolution',
            limit: 4,
            template: '<li class="col-sm-3 col-xs-6"><a href="{{link}}" target="_blank" class="image"><img src="{{image}}" /><span class="caption">{{caption}}</span><span class="logo"><i class="icon ion-social-instagram-outline"></i></span></a></li>'
        });
        userFeed.run();
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Count increment
    /*-------------------------------------------------*/
    try {
        $('#counters').appear(function() {
            $('#counters .statistic span').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function (value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Contact Form
    /*-------------------------------------------------*/
    var submitContact = $('#submit-contact'),
        message = $('#msg');

    submitContact.on('click', function(e){
        e.preventDefault();

        var $this = $(this);

        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if(data.info !== 'error'){
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });
})(jQuery);

$(document).ready(function($) {
    "use strict";
    
    /*-------------------------------------------------*/
    /* =  Carousel
    /*-------------------------------------------------*/
    try {
        $(".team-carousel").owlCarousel({
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4,
                    loop:false
                }
            }
        });
        $(".testimonials-carousel").owlCarousel({
            loop:true,
            animateOut: 'fadeOut',
            animateIn: 'slideInUp',
            items:1,
            autoplay:true,
            autoplayHoverPause:true,
            mouseDrag:false,
            dots:true
        });
        $(".sponsor-carousel").owlCarousel({
            loop:true,
            autoplay:true,
            dots:false,
            autoplayTimeout:3000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:2
                },
                1000:{
                    items:4,
                    loop:true
                }
            }
        });
        $('.project-carousel').owlCarousel({
            center: true,
            items:2,
            loop:true,
            margin:30,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:1
                },
                600:{
                    items:2,
                    margin:20,
                },
                1000:{
                    items:2
                }
            }
        });
        $(".image-carousel").owlCarousel({
            loop:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            autoplay:true,
            autoplayHoverPause:false,
            dots:true
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Skills
    /*-------------------------------------------------*/
    try {
        $('#skills').appear(function() {
            jQuery('.skill-list li span').each(function(){
                jQuery(this).animate({
                    width:jQuery(this).attr('data-percent')
                },2000);
            });
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Parallax
    /*-------------------------------------------------*/
    try {
        $('.parallax').scrolly({bgParallax: true});
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Scroll between sections
    /*-------------------------------------------------*/
    $('footer a[href*=#]').on("click",function(event) {
        var $this = $(this);
        var offset = -70;
        $.scrollTo( $this.attr('href') , 1000, { easing: 'swing' , offset: offset , 'axis':'y' } );
        event.preventDefault();
    });
});
