/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 *
 * Template Name: Surose - Jewelry eCommerce HTML Template  
 * Template URI: https://thememarch.com/demo/html/surose/
 * Description: Surose is a fully responsive Jewelry eCommerce HTML template which comes with the unique and clean design. It built with latest bootstrap 4 framework which makes the template fully customizable. This template is mobile responsive. Design for all kind of Jewellery store.
 * Author: Thememarch
 * Author URI: https://thememarch.com
 * Version: 1.0
 *
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */


(function ($) {
    'use strict';


    $.fn.exists = function () {
        return this.length > 0;
    };

    /* Preloader */
    $('.tm-preloader .tm-button').on('click', function () {
        $('.tm-preloader').fadeOut();
    });
    $(window).on('load', function () {
        $('.tm-preloader').fadeOut();
    });


    var surose = {

        /* Header Options Dropdown */
        headerOptionsDropdown: function () {
            $('.tm-dropdown > button').on('click', function () {
                $(this).siblings('ul').slideToggle();
                $(this).parent('.tm-dropdown').siblings('.tm-dropdown').children('ul').slideUp();
            });
        },

        /* Data Background Image */
        databgImage: function () {
            $('[data-bgimage]').each(function () {
                var url = $(this).data('bgimage');

                $(this).css({
                    'background-image': 'url(' + url + ')'
                });
            });
        },

        /* Mean Menu Activation */
        meanmenuActivation: function () {
            $('.tm-header-nav').meanmenu({
                meanMenuContainer: '.tm-mobilenav',
                meanScreenWidth: '991',
                meanMenuOpen: '<i class="ion-android-menu"></i>',
                meanMenuClose: '<i class="ion-android-close"></i>'
            });
        },

        /* Nice Select */
        niceSelectActive: function () {
            $('select').niceSelect();
        },


        /* Countdown Activation */
        countdownActivation: function () {
            $('.tm-countdown').each(function () {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime(
                        '<div class="tm-countdown-pack tm-countdown-day"><h2 class="tm-countdown-count">%-D</h2><h6>Days</h6></div><div class="tm-countdown-pack tm-countdown-hour"><h2 class="tm-countdown-count">%-H</h2><h6>Hours</h6></div><div class="tm-countdown-pack tm-countdown-minutes"><h2 class="tm-countdown-count">%M</h2><h6>Minutes</h6></div><div class="tm-countdown-pack tm-countdown-seconds"><h2 class="tm-countdown-count">%S</h2><h6>Seconds</h6></div>'));
                });
            });
        },

        /* Slider Activations */
        sliderActivations: {

            /* Heroslider Activations */
            herosliderSliderActivation: function () {
                var heroslider = $('.tm-heroslider-slider').slick({
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 2000,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slick-prev slick-arrow"><i class="ion-ios-arrow-back"></i></button>',
                    nextArrow: '<button class="slick-next slick-arrow"><i class="ion-ios-arrow-forward"></i></button>',
                    fade: true,
                    dots: false
                });
            },

            /* Product Slider Activation */
            productsSliderActivation: function () {
                $('.tm-products-slider').slick({
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 2000,
                    autoplaySpeed: 5000,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Product Slider Activation */
            similliarProductSlider: function () {
                $('.tm-products-slider3').slick({
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 2000,
                    autoplaySpeed: 5000,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Brand Logo Slider Activation */
            brandlogoSliderActivation: function () {
                $('.tm-brandlogo-slider').slick({
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    arrows: false,
                    dots: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 420,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Team Member Slider */
            teamMemberSlider: function () {
                $('.tm-member-slider').slick({
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    pauseOnHover: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Product Details Gallery */
            productDetailsGallery: function () {
                $('.tm-prodetails-largeimages').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    loop: false,
                    asNavFor: '.tm-prodetails-thumbnails'
                });
                $('.tm-prodetails-thumbnails').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    loop: false,
                    asNavFor: '.tm-prodetails-largeimages',
                    dots: false,
                    centerMode: true,
                    centerPadding: '0',
                    arrows: false,
                    focusOnSelect: true
                });
            },

            /* Blog Slider Activation */
            blogSliderActivation: function () {
                $('.tm-blog-slider').slick({
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 2000,
                    autoplaySpeed: 5000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });
            },

            /* Slider Activation Initialization */
            init: function () {
                this.herosliderSliderActivation();
                this.productsSliderActivation();
                this.similliarProductSlider();
                this.brandlogoSliderActivation();
                this.teamMemberSlider();
                this.productDetailsGallery();
                this.blogSliderActivation();
            }
        },

        /* Fancybox Slick Conflict */
        fancyboxSlick: function () {
            $('[data-fancybox]').fancybox({
                beforeShow: function () {
                    $('.tm-product-quickview .tm-prodetails-largeimages').slick('slickNext');
                }
            });
        },

        /* Ajax Mailchimp */
        ajaxMailchimp: function () {
            $('#tm-mailchimp-form').ajaxChimp({
                language: 'en',
                callback: mailChimpResponse,
                // ADD YOUR MAILCHIMP URL BELOW HERE!
                url: 'YOUR_MAILCHIMP_URL_HERE'
            });

            function mailChimpResponse(resp) {
                if (resp.result === 'success') {
                    $('.tm-mailchimp-success').html('' + resp.msg).fadeIn(900);
                    $('.tm-mailchimp-error').fadeOut(400);
                } else if (resp.result === 'error') {
                    $('.tm-mailchimp-error').html('' + resp.msg).fadeIn(900);
                }
            }
        },

        /* Sticky Header */
        stickyHeader: function () {
            if ($('.tm-header-sticky').exists()) {
                var headerHeight = $('.tm-header-bottomarea').height();

                $('.tm-heroslider-area, .tm-breadcrumb-area').css({
                    marginTop: headerHeight + 'px'
                });

                $(window).on('scroll', function () {
                    var scrollPos = $(this).scrollTop();
                    if (scrollPos > 550) {
                        $('.tm-header').addClass('is-sticky');
                    } else {
                        $('.tm-header').removeClass('is-sticky');
                    }
                });
            }
        },

        /* Scroll To Top */
        scrollToTop: function () {
            var trigger = $('#back-top-top');
            trigger.css({
                'visibility': 'hidden',
                'opacity': 0
            });

            trigger.on('click', function () {
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 1000);
            });

            $(window).on('scroll', function () {
                var scrollPos = $(window).scrollTop();
                var winHeight = $(window).height();
                if (scrollPos > winHeight) {
                    trigger.css({
                        'visibility': 'visible',
                        'opacity': 1
                    })
                } else {
                    trigger.css({
                        'visibility': 'hidden',
                        'opacity': 0
                    });
                }
            });

        },

        /* Heroslider Height */
        herosliderHeight: function () {
            var headerHeight = $('.tm-header').height();
            $('.tm-heroslider').css({
                'min-height': 'calc(100vh - ' + headerHeight + 'px)'
            })
        },

        /* Range Slider */
        rangeSlider: function () {
            $('.tm-rangeslider').nstSlider({
                'left_grip_selector': '.tm-rangeslider-leftgrip',
                'right_grip_selector': '.tm-rangeslider-rightgrip',
                'value_bar_selector': '.tm-rangeslider-bar',
                'value_changed_callback': function (cause, leftValue, rightValue) {
                    $(this).parent().find('.tm-rangeslider-leftlabel').text(leftValue);
                    $(this).parent().find('.tm-rangeslider-rightlabel').text(rightValue);
                }
            });
        },

        /* Product Rating Input */
        productRatingInput: function () {
            $('.tm-ratingbox-input').each(function () {
                $(this).find('span').on('mouseenter', function () {
                    $('.tm-ratingbox-input span').addClass('is-active');
                    $(this).nextAll('span').removeClass('is-active');
                });

            });
        },

        /* Product Quality Box */
        productQuantityBox: function () {
            $('.tm-quantitybox').append('<div class="decrement-button tm-quantitybox-button">-</i></div><div class="increment-button tm-quantitybox-button">+</div>');
            $('.tm-quantitybox-button').on('click', function () {
                var button = $(this);
                var quantityOldValue = button.parent().find('input').val();
                var quantityNewVal;
                if (button.text() == "+") {
                    quantityNewVal = parseFloat(quantityOldValue) + 1;
                } else {
                    if (quantityOldValue > 1) {
                        quantityNewVal = parseFloat(quantityOldValue) - 1;
                    } else {
                        quantityNewVal = 1;
                    }
                }
                button.parent().find('input').val(quantityNewVal);
            });
        },

        /* Instageed Active */
        instafeedActive: function () {
            var userFeed = new Instafeed({
                get: 'user',
                userId: 12620117360,
                accessToken: '12620117360.1677ed0.73a0ac15057c4edcada08b9df21cfa49',
                resolution: 'low_resolution',
                limit: 8,
                template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><ul class="tm-instaphotos-counter"><li><i class="ion-heart"></i> {{likes}}</li><li><i class="ion-chatbubbles"></i> {{comments}}</li></ul></a></li>',
                filter: function (image) {
                    return image.tags.indexOf('thememarch_jewelery') >= 0;
                }
            });
            userFeed.run();
        },

        /* Scroll Animation */
        scrollAnimation: function () {
            var controller = new ScrollMagic.Controller();
            $('.tm-scrollanim').each(function (i) {
                new ScrollMagic.Scene({
                        triggerElement: this,
                        triggerHook: 0.8,
                        reverse: false,
                    })
                    .setClassToggle(this, 'scrollanim-action')
                    .addTo(controller);
            });
        },

        // Different Address Form
        differentAddressFormToggle: function () {
            $('#billform-dirrentswitch').on('change', function () {
                if ($(this).is(':checked')) {
                    $('.tm-checkout-differentform').slideDown();
                } else {
                    $('.tm-checkout-differentform').slideUp();
                }
            });
        },

        /* Checkout Payment Method */
        checkoutPaymentMethod: function () {
            $('.tm-checkout-payment input[type="radio"]').each(function () {
                if ($(this).is(':checked')) {
                    $(this).siblings('.tm-checkout-payment-content').slideDown();
                }
                $(this).siblings('label').on('click', function () {
                    $('.tm-checkout-payment input[type="radio"]').prop('checked', false).siblings('.tm-checkout-payment-content').slideUp();
                    $(this).prop('checked', true).siblings('.tm-checkout-payment-content').slideDown();
                });
            });
        },

        /* Login Pass Shower */
        loginPassShower: function () {
            $('input[name="register-pass-show"]').on('change', function () {
                var type = $('input[name="register-pass"]').attr('type');
                if (type == 'password') {
                    $('input[name="register-pass"]').attr('type', 'text');
                } else {
                    $('input[name="register-pass"]').attr('type', 'password');
                }
            });
        },

        /* Menu Overflow */
        menuOverflow: function () {
            $('.tm-header-nav ul li').on('mouseenter mouseleave', function (e) {
                if ($('ul', this).length) {
                    var listElem = $('ul:first', this);
                    var listElemOffset = listElem.offset();
                    var leftValue = listElemOffset.left - $('body').offset().left;
                    var widthValue = listElem.width();

                    if (listElem.find('ul').length) {
                        widthValue = listElem.width() * 2;
                    }

                    var docW = $('body').width();
                    var isEntirelyVisible = (leftValue + widthValue <= docW);

                    if (!isEntirelyVisible) {
                        $(this).addClass('overflow-element');
                    } else {
                        $(this).removeClass('overflow-element');
                    }
                }
            });
        },

        /* Dropdown Children */
        dropdownHasChildren: function () {
            $('.tm-header-nav-dropdown ul li').each(function () {
                if ($(this).children('ul').length) {
                    $(this).addClass('has-child');
                }
            });
        },

        /* Ajax Contact Form */
        ajaxContactForm: function () {
            $(function () {
                // Get the form.
                var form = $('#tm-contactform');

                // Get the messages div.
                var formMessages = $('.form-messages');

                // TODO: The rest of the code will go here...

                // Set up an event listener for the contact form.
                $(form).submit(function (event) {
                    // Stop the browser from submitting the form.
                    event.preventDefault();

                    // Serialize the form data.
                    var formData = $(form).serialize();

                    // Submit the form using AJAX.
                    $.ajax({
                            type: 'POST',
                            url: $(form).attr('action'),
                            data: formData
                        })


                        .done(function (response) {
                            // Make sure that the formMessages div has the 'success' class.
                            $(formMessages).removeClass('error');
                            $(formMessages).addClass('success');

                            // Set the message text.
                            $(formMessages).text(response);

                            // Clear the form.
                            $('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val('');
                        })

                        .fail(function (data) {
                            // Make sure that the formMessages div has the 'error' class.
                            $(formMessages).removeClass('success');
                            $(formMessages).addClass('error');

                            // Set the message text.
                            if (data.responseText !== '') {
                                $(formMessages).text(data.responseText);
                            } else {
                                $(formMessages).text('Oops! An error occured and your message could not be sent.');
                            }
                        });
                });
            });
        },

        /* Portfolio Filter */
        portfolioFilter: function () {
            $('.tm-portfolio-wrapper').imagesLoaded({
                background: true
            }, function () {
                $('.tm-portfolio-wrapper').isotope({
                    itemSelector: '.tm-portfolio-item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 1,
                    }
                });
            });

            $('.tm-portfolio-filters button').on('click', function () {
                var filterValue = $(this).attr('data-filter');
                $('.tm-portfolio-wrapper').isotope({
                    filter: filterValue
                });

                $('.tm-portfolio-filters button').removeClass('is-active');
                $(this).addClass('is-active');
            });
        },

        /* Product Change View */
        productChangeView: function () {
            $('.tm-shop-productview').on('click', 'button', function (e) {
                e.preventDefault();
                var viewMode = $(this).data('view');
                $(this).addClass('active').siblings().removeClass('active');
                if (viewMode === 'list') {
                    $('.tm-shop-products').addClass('list-view');
                } else {
                    $('.tm-shop-products').removeClass('list-view');
                }
            });
        },


        /* All Initialization */
        init: function () {
            surose.headerOptionsDropdown();
            surose.databgImage();
            surose.meanmenuActivation();
            surose.niceSelectActive();
            surose.countdownActivation();
            surose.sliderActivations.init();
            surose.fancyboxSlick();
            surose.ajaxMailchimp();
            surose.stickyHeader();
            surose.scrollToTop();
            surose.herosliderHeight();
            surose.rangeSlider();
            surose.productRatingInput();
            surose.productQuantityBox();
            surose.instafeedActive();
            surose.scrollAnimation();
            surose.differentAddressFormToggle();
            surose.checkoutPaymentMethod();
            surose.loginPassShower();
            surose.menuOverflow();
            surose.dropdownHasChildren();
            surose.ajaxContactForm();
            surose.portfolioFilter();
            surose.productChangeView();
        }
    }

    surose.init();


})(jQuery);