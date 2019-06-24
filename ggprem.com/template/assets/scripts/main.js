(function($) {

    // RESPONSIVE HEADER
    var responsiveHeader = {
        init: function(){
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function(){
            this.$button = $("header#header div.middle-header div.header-buttons a.menu");
            this.$app    = $("div#app");
            this.$menu   = $("nav.side-menu");
            this.$close  = $("nav.side-menu .close-menu");
        },
        bindEvents: function(){
            this.$button.on('click', this.openMenu.bind(this));
            this.$close.on('click', this.closeMenu.bind(this));
        },
        openMenu: function(){
            this.$app.animate({
                position: "relative",
                left: "250px"
            }, 1000);

            this.$menu.animate({
                left: "0"
            }, 1000);

            return false;
        },
        closeMenu: function(){
            this.$app.animate({
                position: "relative",
                left: "0"
            }, 1000);

            this.$menu.animate({
                left: "-100%"
            }, 1000);

            return false;
        }
    }

    responsiveHeader.init();

    $('main#main div.user-coupons div.coupons-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480: {
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $("main#main div.user-coupons div.coupons-list .owl-nav button.owl-next").html('<i class="fa fa-angle-right"></i>');
    $("main#main div.user-coupons div.coupons-list .owl-nav button.owl-prev").html('<i class="fa fa-angle-left"></i>');

    // Last Coupons
    var lastCoupons = $('main#main div.last-coupons div.coupons-list');
    lastCoupons.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('main#main div.last-coupons div.coupons-list div.coupon div.coupon-header div.coupon-next').click(function() {
        lastCoupons.trigger('next.owl.carousel');
    });

    $('main#main div.last-coupons div.coupons-list div.coupon div.coupon-header div.coupon-prev').click(function() {
        lastCoupons.trigger('prev.owl.carousel');
    });

    $('main#main div.testimonials').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('header#header div.top-header .announcement-items').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            }
        }
    });

})( jQuery );
